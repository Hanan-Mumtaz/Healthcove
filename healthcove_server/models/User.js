const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String }, // Password is now optional for OAuth users
    googleId: { type: String, unique: true, sparse: true }, // Google OAuth ID (optional)
  },
  { timestamps: true }
);

// Hash password before saving (only for normal sign-up)
userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || !this.password) return next(); // Skip if password is unchanged or not set
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
