const express = require("express");
const router = express.Router();
const CardItem = require("../models/CartItem");
// const fetchuser = require('../middleware/fetchuser');
const fetchuser = require('../middleware/fetchuser')
const CartItem = require("../models/CartItem");


// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get('/fetchallCartitem', fetchuser, async (req, res) => {
  try {
      const shop = await CardItem.find({ user: req.user.id });
      res.json(shop)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addCartItem',fetchuser, async (req, res) => {
      try {
          const { title, desc, image, price } = req.body;
          const cart = new CardItem({
              title, desc, image, price, user: req.user.id
          })
          const savedNote = await cart.save()

          res.json(savedNote)

      } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
      }
  })

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updateCartItem/:id', fetchuser, async (req, res) => {
  const { Quantity , price } = req.body;
  try {
      // Create a newNote object
      const newCart = {};
      if (Quantity) { newCart.Quantity = Quantity };
      if (price) { newCart.price = description };;

      // Find the note to be updated and update it
      let cart = await CardItem.findById(req.params.id);
      if (!cart) { return res.status(404).send("Not Found") }

      if (cart.user.toString() !== req.user.id) {
          return res.status(401).send("Not Allowed");
      }
      cart = await CartItem.findByIdAndUpdate(req.params.id, { $set: newCart }, { new: true })
      res.json({ cart });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})


// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletecartitem', fetchuser, async (req, res) => {
  try {
      const id = req.body.id
      // Find the note to be delete and delete it
      let cart = await CartItem.findById(id);
      if (!cart) { return res.status(404).send("Not Found") }

      // Allow deletion only if user owns this Note
      if (cart.user.toString() !== req.user.id) {
          return res.status(401).send("Not Allowed");
      }

      cart = await CardItem.findByIdAndDelete(id)
      res.json({ "Success": "Note has been deleted", cart: cart });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

module.exports = router;