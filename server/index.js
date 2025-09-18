const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

const ENABLE_GPT5_MINI = process.env.ENABLE_GPT5_MINI === 'true';

app.use(express.json());

// Serve react build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
  });
}

app.get('/api/config', (req, res) => {
  res.json({ enableGpt5Mini: ENABLE_GPT5_MINI });
});

// Simple stub for generation proxy - replace with real LLM call server-side
app.post('/api/generate', async (req, res) => {
  const model = ENABLE_GPT5_MINI ? 'gpt-5-mini' : 'gpt-4o';
  const prompt = req.body.prompt || '';
  // TODO: call LLM provider here using server-side API key
  // For now, return a stubbed response
  res.json({ model, text: `Stub response for model ${model}. prompt length ${prompt.length}` });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}. ENABLE_GPT5_MINI=${ENABLE_GPT5_MINI}`);
});
