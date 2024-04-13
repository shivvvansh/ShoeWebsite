const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'sujalshahhello';
// creating user 
router.post("/add",[
    // ?checking all credentials of user with the help of npm validation tool
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "password must be greater than 8 digits").isLength({min: 5,}),
    body("contact", "enter a vslid contact number").isLength({min: 9,max: 13,}),
    // body("address", "enter a valid address").isLength({ min: 10 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //We are checking the email address of user is already registered or not 
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        // if its registered then we send an error
        return res.status(400).json({ error: "this user already exist" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // now we are taking all users value name email etc...
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password:  secPass,
        contact: req.body.contact,
        // address: req.body.address,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      // res.json(user);
      res.json(authtoken)
    } catch (error) {
      console.log(error);
      // if error from server side
      res.status(500).send("server side error");
    }
  }
);

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


// deleting user 
router.delete('/delete',async(req,res)=>{ 
 try {
  const id = req.body.id
  const removeuser = await User.findByIdAndDelete(id)
  console.log(removeuser);
  res.status(200).json("deleted user successfully")
 } catch (error) {
  console.log(error);
  res.status(500).send("server side error");
 }
});
module.exports = router;
// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser,  async (req, res) => {

  try {
     let userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})