require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbconn');

const PORT = process.env.PORT || 4000;

// connect to database
connectDB();

// routes
const authRoutes = require('./routes/authRoutes');

// middleware
const corsOptions = {
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use('/api', authRoutes);

// production build
if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));

  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
}

// start server
app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
