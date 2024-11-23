const express=require("express")
const router = express.Router()
const {getProducts,getProduct,updateProduct,createProduct,deleteProduct}=require("../controllers/product.controller")

//status codes
//500 not ok
//200 ok 

//display all products
router.get('/',getProducts)

//get single product
router.get('/:id',getProduct)

//update a product
router.put('/:id',updateProduct)        

//delete a product
router.delete('/:id',deleteProduct)


//create a product 
router.post('/',createProduct)



module.exports=router;