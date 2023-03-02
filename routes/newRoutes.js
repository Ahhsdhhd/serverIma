const { Router } = require("express");
const { validationResult } = require("express-validator");
const { newBill } = require("../models/newModel");
const { ObjectId } = require("mongoose").Types;

const router = Router();

router.get("/listnewBill", async (req, res) => {
  try {
    const bills = await newBill.find();
    res.send(bills);
  } catch (error) {
    console.error("Error in retrieving newBill api:", error);
    res.status(500).send("An error occurred while retrieving the newBill data");
  }
});

router.post("/newBill", async (req, res) => {
  const {
    years,
    type,
    month,
    imaNo,
    degn,
    name,
    dob,
    bp,
    pp,
    gp,
    da,
    hra,
    hca,
    tpa,
    tpa_da,
    wa,
    arr,
    misc1,
    grossPay,
    gpfSubs,
    gpfRec,
    fa,
    cgeis,
    rent,
    misc2,
    eol,
    netPay,
    remark,
  } = req.body;

  const bill = new newBill({
    years,
    type,
    month,
    imaNo,
    degn,
    name,
    dob,
    bp,
    pp,
    gp,
    da,
    hra,
    hca,
    tpa,
    tpa_da,
    wa,
    arr,
    misc1,
    grossPay,
    gpfSubs,
    gpfRec,
    fa,
    cgeis,
    rent,
    misc2,
    eol,
    netPay,
    remark,
  });

  try {
    const savedBill = await bill.save();
    res.send(savedBill);
  } catch (error) {
    console.error("Error in saving newBill:", error);
    res.status(500).send("An error occurred while saving the newBill data");
  }
});

router.put("/edit/:id", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;

  try {
    const updatedBill = await newBill.findByIdAndUpdate(
      ObjectId(id),
      { $set: req.body },
      { new: true },
    );
    if (!updatedBill) {
      return res.status(404).send("The bill with the given ID was not found.");
    }
    res.send(updatedBill);
  } catch (error) {
    console.error("Error in updating newBill:", error);
    res.status(500).send("An error occurred while updating the newBill data");
  }
});
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBill = await newBill.findByIdAndDelete(ObjectId(id));
    if (!deletedBill) {
      return res.status(404).send("The bill with the given ID was not found.");
    }
    res.send(deletedBill);
  } catch (error) {
    console.error("Error in deleting newBill:", error);
    res.status(500).send("An error occurred while deleting the newBill data");
  }
});


module.exports = router;
