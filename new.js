const { json } = require("body-parser");
const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

var { payBill } = require("../models/payBillModel");
const { check, validationResult } = require("express-validator");

//=>localhost:3000/ExpenditureForm-----------------------------------------------------------------------------------------------------------------------

router.get("/listbill", (req, res) => {
  payBill.find((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "error in retriving payBill api" + JSON.stringfy(err, undefined, 2),
      );
    }
  });
});
//POST----------------------------------------------------------------------------------------------------------------------------------------------------
router.post("/paybill", (req, res) => {
  var addPayBill = new payBill({
    years: req.body.years,
    type: req.body.type,
    month: req.body.month,
    imaNo: req.body.imaNo,
    degn: req.body.degn,
    name: req.body.name,
    dob: req.body.dob,
    bp: req.body.bp,
    pp: req.body.pp,
    gp: req.body.gp,
    da: req.body.da,
    hra: req.body.hra,
    hca: req.body.hca,
    tpa: req.body.tpa,
    tpa_da: req.body.tpa_da,
    wa: req.body.wa,
    arr: req.body.arr,
    misc1: req.body.misc1,
    grossPay: req.body.grossPay,
    gpfSubs: req.body.gpfSubs,
    gpfRec: req.body.gpfRec,
    fa: req.body.fa,
    cgeis: req.body.cgeis,
    rent: req.body.rent,
    misc2: req.body.misc2,
    eol: req.body.eol,
    netPay: req.body.netPay,
    remark: req.body.remark,
  });
  addPayBill.save((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "error in saving payBill " + JSON.stringify(err, undefined, 2),
      );
    }
  });
});
// router.put("/editbill/:id", (req, res) => {
//   User.findById(req.params.id)
//     .then((user) => {
//       user.updatedAt = Date.now();
//       user.years = req.body.years;
//       (user.month = req.body.month),
//         (user.type = req.body.type),
//         (user.imaNo = req.body.imaNo),
//         (user.degn = req.body.degn),
//         (user.name = req.body.name),
//         (user.dob = req.body.dob),
//         (user.bp = req.body.bp),
//         (user.pp = req.body.pp),
//         (user.gp = req.body.gp),
//         (user.da = req.body.da),
//         (user.hra = req.body.hra),
//         (user.hca = req.body.hca),
//         (user.tpa = req.body.tpa),
//         (user.tpa_da = req.body.tpa_da),
//         (user.wa = req.body.wa),
//         (user.arr = req.body.arr),
//         (user.misc1 = req.body.misc1),
//         (user.grossPay = req.body.grossPay),
//         (user.gpfSubs = req.body.gpfSubs),
//         (user.gpfRec = req.body.gpfRec),
//         (user.fa = req.body.fa),
//         (user.cgeis = req.body.cgeis),
//         (user.rent = req.body.rent),
//         (user.misc2 = req.body.misc2),
//         (user.eol = req.body.eol),
//         (user.netPay = req.body.netPay),
//         (user.remark = req.body.remark);
//       return user.save();
//     })
//     .then((user) => {
//       res.json(user);
//     })
//     .catch((err) => {
//       console.error(err);
//       res
//         .status(500)
//         .json({ error: "An error occurred while updating the user." });
//     });
// });

router.put('/edit/:id', [
  check('years').isNumeric(),
  check('month').not().isEmpty(),
  check('type').not().isEmpty(),
  check('imaNo').not().isEmpty(),
  check('degn').not().isEmpty(),
  check('name').not().isEmpty(),
  check('dob').not().isEmpty(),
  check('bp').isNumeric(),
  check('pp').isNumeric(),
  check('gp').isNumeric(),
  check('da').isNumeric(),
  check('hra').isNumeric(),
  check('hca').isNumeric(),
  check('tpa').isNumeric(),
  check('tpa_da').isNumeric(),
  check('wa').isNumeric(),
  check('arr').isNumeric(),
  check('misc1').isNumeric(),
  check('grossPay').isNumeric(),
  check('gpfSubs').isNumeric(),
  check('gpfRec').isNumeric(),
  check('fa').isNumeric(),
  check('cgeis').isNumeric(),
  check('rent').isNumeric(),
  check('misc2').isNumeric(),
  check('eol').isNumeric(),
  check('netPay').isNumeric(),
  check('remark').optional({ nullable: true })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  try {
      const { id } = req.params

      const dataForm = await payBill.findByIdAndUpdate(id, req.body, { new: true });
      if (!dataForm) {
          return res.status(404).json({ msg: 'gc not found' });
      }
      res.json(dataForm);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});


module.exports = router;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var payBill = mongoose.model('payBill', {

    years:{
        type:Number
        
    },
    month:{
        type:String
    },
    type:{
        type:String
    },
    imaNo:{

        type:String
    },
    degn:{
        type:String
    },
    name:{
        type:String
    },
    dob:{
        type:String
    },
    bp:{
        type:Number
    },
    pp:{
        type:Number
    },
    gp:{
        type:Number
    },
    da:{
      type:Number
    },
    hra:{
        type:Number
    },
    hca:{
        type:Number
    },
    tpa:{
        type:Number
    },
    tpa_da:{
        type:Number
    },
    wa:{
    type:Number
    },
    arr:{
        type:Number
    },
    misc1:{
        type:Number
    },
    grossPay:{
        type:Number
    },
    gpfSubs:{
        type:Number
    },
    gpfRec:{
        type:Number
    },
    fa:{
       type:Number 
    },
    
    cgeis:{
       type:Number
    },
    rent:{
    type:Number
    },
    misc2:{
        type:Number
    },
    eol:{
        type:Number
    },
    netPay:{
        type:Number
    },
    remark:{
        type:String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
 
})


module.exports = { payBill };





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


