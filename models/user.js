const mongoose = require('mongoose');
const bcrypt =require('bcrypt');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

userSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

userSchema.virtual('confirmPassword')
  .set(function(confirmPassword){
    this._confirmPassword = confirmPassword;
  });

userSchema.pre('validate', function(next) {
  console.log('Pre-validate hook has happened');
  if(this._confirmPassword !== this.password){
    console.log('Passwords did not match');
    this.invalidate('confirmPassword', 'does not match');
  }
  next();
});

userSchema.post('validate', function() {
  console.log('post-validate hook has happened');
});

userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});





module.exports = mongoose.model('User', userSchema);
