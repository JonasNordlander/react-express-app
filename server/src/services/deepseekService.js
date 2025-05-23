const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: 'https://api.deepseek.com'
});

async function getChatCompletion(message) {
  const completion = await openai.chat.completions.create({
    model: 'deepseek-chat',
    messages: [{ role: 'user', content: message }],
    max_tokens: 1000
  });

  return completion.choices[0].message.content;
}

module.exports = { getChatCompletion };