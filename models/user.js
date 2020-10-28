const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v){
        return /https?:\/\/(www\.)?/.test(v);
      },
      message: 'Ссылка введена неверно',
    }
  }
});

module.exports = model('user', userSchema);
