const express = require('express');
const router = express.Router();
const config = require('config');
// https://github.com/express-validator/express-validator
// DOCUMENTATION: https://express-validator.github.io/docs/
const {check, validationResult} = require('express-validator/check')



const Program = require('../../models/Program')



const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      user = new User({
        name,
        email,
        avatar,
        password
      });

    // BCRYPT SALT PASSWORD
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
 
      await user.save();

    // jwt payload we use user id
    // also, mongoose uses an abstraction so that we can use 'id' instead of '_id'
      const payload = {
        user: {
          id: user.id
        }
      };




module.exports = router;