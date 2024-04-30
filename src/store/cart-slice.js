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
        }
    }
)
export const cartActions = cartSlice.actions;
export default cartSlice;