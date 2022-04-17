const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id: { type: ObjectId },
    username: { 
        type: String, 
        unique: [true, "Email already in use"],
        lowercase: true,
        trim:true,
        required: [true, "Email not provided"],
        validate: {
            validator: function (v) {
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: '{VALUE} is not a valid email!'
          } },
        
    password: { type: String, required: true }
});

module.exports = mongoose.model('user', userSchema);