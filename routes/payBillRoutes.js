const { json } = require("body-parser");
const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

var { payBill } = require("../models/payBillModel");

//=>localhost:3000/ExpenditureForm-----------------------------------------------------------------------------------------------------------------------

router.get("/listbill", (req, res) => {
  payBill.find((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "error in retriving payBill api" +
          JSON.stringfy(err, undefined, 2)
      );
    }
  });
});
//POST----------------------------------------------------------------------------------------------------------------------------------------------------
router.post("/paybill", (req, res) => {
    var addPayBill = new payBill({
     
   
    imaNo:req.body.imaNo,
    degn:req.body.degn,
    name:req.body.name,
    dob:req.body.dob,
    bp:req.body.bp,
    pp:req.body.pp,
    gp:req.body.gp,
    da:req.body.da,
    hra:req.body.hra,
    hca:req.body.hca,
    tpa:req.body.tpa,
    tpa_da:req.body.tpa_da,
    wa:req.body.wa,
    arr:req.body.arr,
    misc1:req.body.misc1,
    grossPay:req.body.grossPay,
    gpfSubs:req.body.gpfSubs,
    gpfRec:req.body.gpfRec,
    fa:req.body.fa,                                   
    cgeis:req.body.cgeis,
    rent:req.body.rent,
    misc2:req.body.misc2,
    eol:req.body.eol,
    netPay:req.body.netPay,
    remark:req.body.remark
    

    });
    addPayBill.save((err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        console.log(
          "error in saving payBill " + JSON.stringify(err, undefined, 2)
        );
      }
    });
  });
  router.put('/editbill/:id', (req, res) => {
    User.findById(req.params.id)
      .then(user => {
       
        user.updatedAt = Date.now();
       user.year=req.body.year;
        user.month=req.body.month,
        user.type=req.body.type,
        user.imaNo=req.body.imaNo,
       user.degn=req.body.degn,
        user.name=req.body.name,
        user.dob=req.body.dob,
        user.bp=req.body.bp,
        user.pp=req.body.pp,
        user.gp=req.body.gp,
        user.da=req.body.da,
        user.hra=req.body.hra,
        user.hca=req.body.hca,
        user.tpa=req.body.tpa,
        user.tpa_da=req.body.tpa_da,
        user.wa=req.body.wa,
        user.arr=req.body.arr,
        user.misc1=req.body.misc1,
        user.grossPay=req.body.grossPay,
        user.gpfSubs=req.body.gpfSubs,
        user.gpfRec=req.body.gpfRec,
        user.fa=req.body.fa,                                   
        user.cgeis=req.body.cgeis,
        user.rent=req.body.rent,
        user.misc2=req.body.misc2,
        user.eol=req.body.eol,
        user.netPay=req.body.netPay,
        user.remark=req.body.remark
        return user.save();
      })
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while updating the user.' });
      });
  });
  
  
module.exports = router;