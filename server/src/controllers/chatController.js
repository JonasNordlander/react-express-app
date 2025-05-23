const { getChatCompletion } = require('../services/deepseekService');

const handleChat = async (req, res) => {
  try {
    const userMessage = req.body.message;
    const response = await getChatCompletion(userMessage);
    res.json({ response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Chat failed' });
  }
};

module.exports = { handleChat };
