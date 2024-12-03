
import product_model from "../Model/products.model.js";

export function addingProducts(req,res){
  const {title,description,price,rating,images}=req.body;
 const newProduct= new product_model({
    title,
    description,
    rating,
    price,
    images
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

export function getProductDetails(req,res){
    product_model.find().then((data)=>{
        if(!data){
            return res.status(404).send({'Message':"No product exist"})
        }
        res.send(data)
    }).catch((err)=>{
        return res.status(500).json({message:err.message})
      })
}
export function getDetailsProductId(req,res){
    const id=req.params.id;
    product_model.findById(id).then((data)=>{
        if(!data){
            return res.status(404).send({"message":"User doesn't found"});
        }
        res.send(data)
    }).catch((err)=>{
        return res.status(500).json({message:err.message});
    })
}


export function deleteProduct(req,res){
    const id=req.params.id
    console.log(id)
    product_model.findByIdAndDelete(id).then((data)=>{
        if(!data){
            console.log(data)
            return res.status(404).send({"message":"Product doesn't exist"});
        }
        res.send({'Message':"Product deleted successfully"})
    }).catch((err)=>{
        return res.status(500).send({"message":"Something went wrong"})
    })
}

export function updateDetailsProduct(req,res){
    const id=req.params.id;
    product_model.findByIdAndUpdate(id,req.body).then((data)=>{
        if(!data){
            return res.status(404).send({"message":"Product not found"});
        }
        getProductDetails(req,res);
    }).catch((err)=>{
        return res.status(500).send({"message":err.message})
    })
}