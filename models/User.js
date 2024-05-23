const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: [6, "Password must a atleast 6 characters long "],
    select: false,
  },
  customerId: {
    type: String,
    default: "",
  },
  subscription: {
    type: String,
    default: "",
  },
});

UserSchema.pre("save", async (next) => {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


UserSchema.methods.matchPasswords = async function(password){
    return await bcrypt.hash(password,this.password)
}

UserSchema.methods.getSignedJwtToken = async function(){
    const accessToken = jwt.sign({id:this._id},process.env.JWT_ACCESSS_SECRET,{expiresIn:process.env.JWT_ACCESS_EXPIRE});
console.log(accessToken,'accesstoken');
    const refreshToken = jwt.sign({id:this._id},process.env.JWT_REFRESH_SECRET,{expiresIn:process.env.JWT_REFRESH_EXPIRE})
    console.log(refreshToken,'refreshTOken');

    res.cookie('refreshToken',`${refreshToken}`,{maxAge:86400 * 7000,httpOnly:true})

    return {accessToken,refreshToken}
}

const User = mongoose.model("User",UserSchema);

module.exports = User;