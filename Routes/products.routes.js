import { addingProducts_toCart, deleteProductCartDetails, getProductCartDetails } from "../Controller/productCart.controller.js";
import { addingProducts, deleteProduct, getDetailsProductId, getProductDetails, updateDetailsProduct } from "../Controller/products.controller.js";
import { verifyToken } from "../Middleware/verifytoke.js";


export function routes(app){
       app.post('/add-products',(req,res)=>{
            addingProducts(req,res)
       })
       app.get('/',getProductDetails);
       app.get('/:id',getDetailsProductId);
       app.delete('/delete/:id',deleteProduct);
       app.put('/update/:id',updateDetailsProduct);
       app.post('/add-ItemTo-cart',addingProducts_toCart);
       app.get('/cartDetails/:id', verifyToken,getProductCartDetails);
       app.delete('/deleteCartItems/:id',deleteProductCartDetails);
}
