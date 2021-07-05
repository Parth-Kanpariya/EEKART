const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
  productName: {
    type: String
  },
  productId: {
   type: String
  },
  category:{
    type: String
  },
  sub_category:{
    type: String
  },
  image: {
   type: String
  },
  image1: {
   type: String
  },
    image2: {
   type: String
  },
    image3: {
   type: String
  },
  description: {
   type: String
  },
  rating: {
   type: Number
  },
  price: {
   type: Number
  }
})

const product  = mongoose.model('Product',product_schema);
module.exports = product;