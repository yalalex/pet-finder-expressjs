const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

app.use(
  express.json({
    extended: false,
  })
);

app.use(
  cors({
    origin: ['http://localhost:3000', 'https://pet-finder-by.onrender.com'],
    credentials: true,
  })
);

app.use('/api/users', require('./routes/users'));
app.use('/api/ads', require('./routes/ads'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
