const express = require("express");
const router = express.Router();
const Products = require("../models/Products");
router.get("/show",async (req, res) => {
  const food = await Products.find({})
  res.json(food)
})
router.post("/onlyone",async (req, res) => {
  let id = await req.body.id;
  try {
    const food = await Products.findById(id)
  res.status(200).json(food)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})
router.post("/tag",async (req, res) => {
  let tags = await req.body.tag;
  try {
    const food = await Products.find({tag:{$eq:tags}})
    
  res.status(200).json(food)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})
router.post("/special",async (req, res) => {
  let special = await req.body.special;
  try {
    const food = await Products.find({special:{$eq:special}})
    
  res.status(200).json(food)
  } catch (error) {
    console.log(error);
    res.json(error)
  }
})
router.post("/add",async (req, res) => {
    try {
      const {title,desc,tag,image,price} = req.body;
      const shop = new Products({
        title,desc,tag,image,price,
      });
      const savednote = await shop.save();
      res.json(savednote);
    } catch (error) {
      console.log(error);
      res.status(500).send("some error occured");
    }
  }
);

router.delete("/delete",async(req,res)=>{
 try {
  const id = req.body.id
  const shop = await Products.findByIdAndDelete(id)
  res.json(shop)
 } catch (error) {
   res.status(500).json("not find")
 }
})


// router.put("update",async(req,res)=>{
//   try {
//   } catch (error) {
//   }
// })

module.exports = router;