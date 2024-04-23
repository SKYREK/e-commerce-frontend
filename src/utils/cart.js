export function getCart(){
    //get the cart from localstorage
    const cartString = localStorage.getItem('cart');
    if(cartString)
        return JSON.parse(cartString);
    else
        return [];

}
export function addToCart(product ,varient = -1, quantity = 1){
    //get the cart from localstorage
    const cartString = localStorage.getItem('cart');
    let cart = [];
    if(cartString)
        cart = JSON.parse(cartString);
    //check if the product is already in the cart
    let productIndex = cart.findIndex((cartProduct)=>cartProduct.product._id === product._id);
    if(productIndex === -1){
        //if not in the cart, add it to the cart
        cart.push({product : product, quantity : quantity , varient : varient});
    }else{
        //if in the cart, update the quantity
        cart[productIndex].quantity += quantity;
    }
    console.log(cart)
    //save the cart to localstorage
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function emptyCart(){
    //empty the cart
    localStorage.setItem('cart',JSON.stringify([]));
}
export function validateCart(){
    console.log("cart validation is not implemented yet.")
}
export function expandCart(){
    console.log("cart expansion is not loaded")
}
//varient!=-1?(product.variants[varient].lastPrice*quantity).toFixed(2):(product.lastPrice*quantity).toFixed(2)
export function getTotalOfCart(){
    let total = 0;
    getCart().forEach((item)=>{
        total += item.varient !== -1?(item.product.variants[item.varient].lastPrice*item.quantity):(item.product.lastPrice*item.quantity);
    })
    return total;
}