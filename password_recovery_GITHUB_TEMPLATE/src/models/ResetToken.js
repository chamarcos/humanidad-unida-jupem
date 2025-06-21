const { Schema, model } = require('mongoose');

const resetTokenSchema = new Schema({
  email:     { type: String, required: true, index: true },
  token:     { type: String, required: true },
  expireAt:  { type: Date,   required: true, index: { expires: 0 } }
});

module.exports = model('ResetToken', resetTokenSchema);
