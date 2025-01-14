const express = require('express');
const dotenv = require('dotenv');
const OpenAI = require('openai-api');

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());

const openai = new OpenAI(process.env.OPENAI_API_KEY); 

app.post('/generate-intro', async (req, res) => {
  const { script } = req.body;

  if (!script) {
    return res.status(400).json({ error: 'Script is required.' });
  }

  try {
    const prompt = `
      You are a professional YouTube scriptwriter known for creating captivating and engaging intros. 
      Based on the following video script, create 1-2 sentence YouTube intro that hooks the audience, 
      builds excitement, and clearly conveys the video's theme or purpose. 
      Keep the tone enthusiastic and appealing to a broad audience. Add relevant hashtags as well.

      Video Script:
      ${script}

      YouTube Intro:
    `;

    const response = await openai.complete({
      engine: 'text-davinci-003',
      prompt: prompt,
      maxTokens: 60,
      temperature: 0.7,
    });

    const intro = response.data.choices[0].text.trim();
    res.status(200).json({ intro });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate intro.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
