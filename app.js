// Import dependencies

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');

var payBillRoutes = require('./routes/payBillRoutes')

const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://anki:DbyG1PUCfJKyJd0J@cluster0.y4pzwg5.mongodb.net/test?retryWrites=true&w=majority';


// Set up Express app

const app = express();
app.use(express.json());
app.use(cors());



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// Connect to MongoDB

mongoose.connect('mongodb+srv://anki:DbyG1PUCfJKyJd0J@cluster0.y4pzwg5.mongodb.net/test?retryWrites=true&w=majority', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 

})


MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.log('Error occurred while connecting to MongoDB...\n', err);
  }
  console.log('Connected to MongoDB...');
  //const collection = client.db('imaP').collection('<collection>');
  // Perform database operations
  client.close();
});

// Routes for payBill

app.use("/", payBillRoutes);

// Create Mongoose schema for User

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before saving user

UserSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

   // Create Mongoose model for User

const User = mongoose.model('User', UserSchema);

   // Route handlers

app.post('/signup', async (req, res) => {
      
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send('User registered successfully.');
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post('/login', async (req, res) => {
  const { userName, password } = req.body;
  try {
        // Find user by userName
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(400).send('User not found.');
    }
       
    // Compare password
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid userName or password.');
    
    }

    // Generate JWT
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (error) {
    res.status(500).send(error);
  }
});

  // Start the server

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


