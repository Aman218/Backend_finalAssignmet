import productCart_model from "../Model/productCart.model.js";


export function addingProducts_toCart(req,res){
    const {title,description,price,rating,productId}=req.body;
   const newProduct= new productCart_model({
      title,
      description,
      rating,
      price,
      productId
    });
    newProduct.save().then(((data)=>{
      if(!data){
          return res.status(404).send({"Message":"Product not found"})
      }
      res.send({'Message':"Product added Successfully"});
    })).catch((err)=>{
      return res.status(500).json({message:err.message})
    })
   
  }
  
  export function getProductCartDetails(req, res) {
    const id = req.params.id;
    
    productCart_model.find({ productId: id }).then((data) => {
        if (!data || data.length === 0) {
            return res.status(404).send({ 'Message': "No product exists in the cart" });
        }
    //  console.log("Data",data.length)
   
        res.send({
            "Total_Quantity_Added": data.length,
        });
    }).catch((err) => {
        return res.status(500).json({ message: err.message });
    });
}


export function deleteProductCartDetails(req, res) {
    const id = req.params.id;
    
    productCart_model.deleteMany({ productId: id }).then((data) => {
        if (!data || data.length === 0) {
            return res.status(404).send({ 'Message': "No product exists in the cart" });
        }
    //  console.log("Data",data.length)
   
        res.send({
            "Message": "Data in the cart deleted successfully",
        });
    }).catch((err) => {
        return res.status(500).json({ message: err.message });
    });
}
