const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  matchesPlayed: { type: Number, default: 0 },
  matchesWon: { type: Number, default: 0 },
  deck: [
    {
      type: String,
    },
  ],
  defuseCards: { type: Number, default: 0 },
  openedCard: { type: String },
});

// Pre hook for `findOneAndUpdate`
UserSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  this.options.new = true;
  next();
});

module.exports = mongoose.model("User", UserSchema, "users");
