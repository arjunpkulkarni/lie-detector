const axios = require('axios');

// Set your API key
const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

// Example: Generate text with GPT-3
axios.post(apiUrl, {
  prompt: "You are a LLM, who is meant to take in a transcript of a interview and after reading it you must output a vector with values which show which is most likely being felt, Positive, Negative, or Neutral.",
  max_tokens: 50
}, {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    console.log(response.data.choices[0].text);
  })
  .catch(error => {
    console.error('Error:', error);
  });
