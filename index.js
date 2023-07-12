const express = require('express');
const cors = require('cors');
const app = express();
const fetch = require('isomorphic-fetch');

app.use(cors());

const apiKey = '4NKQ3-815C2-8T5Q2-16318-55301';

app.use(express.json());

app.post('/generate-token', async (req, res) => {
  try {
    const response = await fetch('https://devcore02.cimet.io/v1/generate-token', {
      method: 'POST',
      headers: {
        'api-key': req.headers['api-key']
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/plan-list', async (req, res) => {
  console.log(req.headers)
  try {
    const response = await fetch('https://devcore02.cimet.io/v1/plan-list', {
      method: 'POST',
      headers: {
        'Content-Type': req.headers['content-type'],
        'Api-key': req.headers['api-key'],
        'Auth-token': req.headers['auth-token']
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
