import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../utils/cart";

const cartSlice = createSlice(
    {
        name : 'cart',
        initialState : {
            cart : getCart(),
            cartOpened : false,
        },
        reducers : {
            openCart : (state) => {
                state.cartOpened = true;
            },
            closeCart : (state) => {
                state.cartOpened = false;
            },
            addToCart : (state,action)=>{
                let product = action.payload.product;
                let varient = action.payload.varient;
                let quantity = action.payload.quantity;
                let productIndex = state.cart.findIndex((cartProduct)=>cartProduct.product._id === product._id);
                if(productIndex === -1){
                    state.cart.push({product : product, quantity : quantity , varient : varient});
                }else{
                    state.cart[productIndex].quantity += quantity;
                }
            }
        }
    }
)
export const cartActions = cartSlice.actions;
export default cartSlice;
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