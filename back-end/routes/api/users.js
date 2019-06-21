const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
// https://github.com/express-validator/express-validator
// DOCUMENTATION: https://express-validator.github.io/docs/
const {check, validationResult} = require('express-validator/check')

const User = require('../../models/User')


// @route Get api/users
// @desc Test Route
// @access Public
// router.get('/', (req, res) => res.send('User Route'));

// @route Get api/users
// @desc Register User
// @access Public
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

      const payload = {
        user: {
          id: user.id
        }
      };

                             
    } catch (err) {
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