require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

mongoose.connection.on('connected', () => {
  console.log('connected to mongo!');
});

mongoose.connect(process.env.MONGO_URI);

const emailSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: {
    required: true,
    type: String,
  },
  phoneNumber: {
    type: String,
    // validate: {
    //   validator: function (v) {
    //     return /\d{3}-\d{3}-\d{4}/.test(v);
    //   },
    // },
  },
  subject: {
    required: true,
    type: String,
  },
  message: {
    required: true,
    type: String,
  },
});

const Email = mongoose.model('Email', emailSchema);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.post('/api/email', async (req, res) => {
  try {
    const newEmail = new Email(req.body);
    await newEmail.save();
    res.send('Email created').status(200);
  } catch (err) {
    res.send(err.message).status(400);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});
