var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    age: Number,
    favourites: [String],
    marks: [Number],
  },
  { timestamps: true }
);

var addressSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pin: Number,
  user: Schema.Types.ObjectId,
});
