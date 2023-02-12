const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Thought');

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
       },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/],
    },

    thought: [thoughtSchema],
    friends:  [this]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
