const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to my Node.js API on Cloud Run!",
    status: "Healthy",
    timestamp: new Date()
  });
});

app.get('/user', (req, res) => {
  res.json({ username: "devops_learner", role: "Cloud Engineer" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
