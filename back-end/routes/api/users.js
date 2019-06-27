const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const config = require('config');
// https://github.com/express-validator/express-validator
// DOCUMENTATION: https://express-validator.github.io/docs/
const {check, validationResult} = require('express-validator/check')

// https://jwt.io breaks down what's going on in json webtoken
const jwt = require("jsonwebtoken");

const User = require('../../models/User')


// @route Get api/users
// @desc Test Route
// @access Public
// router.get('/get', (req, res) => res.send('User Route'));

// @route Get api/users
// @desc Register User
// @access Public


router.post('/login', [
  check('email', 'Please enter a valid email')
  .isEmail(), 
  check('password', 'Password must be at least 6 characters long').isLength({min : 6})], 
  
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const  email = req.body.email;
    const password = req.body.password; 

    try {
      let user = await User.findOne({ email}); 
      if(!user) {
          return res.status(404).json({errors: [{ msg: 'User not found'}]  });
      }

      bcrypt.compare(password, user.password); 
      if(user) {
        const payload = {
          user: {
            id: user.id
          }
        }; 

        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } else {
        return res.status(400).json({errors: [{msg: 'Password incorrect'}]})
      }
      } catch (err) {
          console.log("are we playing catch dad?")
          console.error(err.message);
          res.status(500).send('Server error');
      }
});


    




router.post('/register',[
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
], async (req, res) => {
    
    //validationResult is a function grabbed from express validator (see above)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );


                             
    } catch (err) {
      console.log("are we playing catch dad?")
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);



// @route Post api/users
// @desc Register user (create user)
// @access Public
// router.post('/register', (req, res) => {
//     console.log(req.body)
//     res.send('User Route'))
// });

module.exports = router;