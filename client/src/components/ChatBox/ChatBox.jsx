import React, { useState } from 'react';
import './ChatBox.css';
import axios from 'axios';

function ChatBox() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/chat`, {
        message: input
      });
      setResponse(res.data.response);
    } catch (err) {
      setResponse('Error fetching response');
      console.error(err);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbox">
      <textarea
        className="form-control"
        rows="3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Ask something..."
      />
      <button className="btn btn-primary mt-2" onClick={handleSend} disabled={loading}>
        {loading ? (
          <>
            <i className="fas fa-spinner fa-spin me-2"></i> Sending...
          </>
        ) : (
          'Send'
        )}
      </button>

      <div className="chatbox-response mt-4">
        <h5>Response:</h5>
        {loading ? (
          <p className="text-muted"><i className="fas fa-spinner fa-spin"></i> Waiting for response...</p>
        ) : (
          <p>{response}</p>
        )}
      </div>
    </div>
  );
}

export default ChatBox;
