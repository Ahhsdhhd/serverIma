const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var payBill = mongoose.model('payBill', {

    year:{
        type:String
        ,default:"2023"
    },
    month:{
        type:String,
        default:"Feburary"
    },
    type:{
        type:String,
        default:"payBill"
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
        type:Number
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



