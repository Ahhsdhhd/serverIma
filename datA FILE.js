const mongoose = require('mongoose');

const payBillSchema = new mongoose.Schema({
    years: { type: Number },
    month: { type: String },
    type: { type: String },
    imaNo: { type: String },
    degn: { type: String },
    name: { type: String },
    dob: { type: String },
    bp: { type: Number },
    pp: { type: Number },
    gp: { type: Number },
    da: { type: Number },
    hra: { type: Number },
    hca: { type: Number },
    tpa: { type: Number },
    tpa_da: { type: Number },
    wa: { type: Number },
    arr: { type: Number },
    misc1: { type: Number },
    grossPay: { type: Number },
    gpfSubs: { type: Number },
    gpfRec: { type: Number },
    fa: { type: Number },
    cgeis: { type: Number },
    rent: { type: Number },
    misc2: { type: Number },
    eol: { type: Number },
    netPay: { type: Number },
    remark: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

payBillSchema.statics.isNewRecord = (doc) => doc.isNew;

const payBill = mongoose.model('payBill', payBillSchema);

module.exports = { payBill };
