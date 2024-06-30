//import PropTypes from 'prop-types';
import CartItem from '../cartItem';
import { emptyCart, getCart, getTotalOfCart } from '../../utils/cart';
import { IoMdClose } from 'react-icons/io';
import "./index.css"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { useNavigate } from 'react-router-dom';
export default function CartSlider(){
    const[mouseInCloseArea ,setMouseInCloseArea] = useState(false);
    const cartOpened = useSelector(state=>state.cart.cartOpened);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return(
        <div className={`h-[100vh]  overflow-x-hidden  mobile-nav fixed   z-[190]   top-0 right-0  ${!cartOpened?"cart-slider-background-close":"w-full bg-[#00000066]"}`} onClick={()=>{
          if(mouseInCloseArea)
            dispatch(
              cartActions.closeCart()
            )
          }}
          onMouseEnter={()=>{
            setMouseInCloseArea(true)
          }}
           >
            
            <div className={`h-full w-[75%] lg:w-[400px] bg-white fixed overflow-hidden   top-0 right-0 z-[195] flex mobile-nav-items flex-col ${!cartOpened?"cart-slider-closed":""}`}
            onClick={()=>{
              console.log("clicked")
            }}
            onMouseEnter={()=>{
              setMouseInCloseArea(false)
            }}
            onMouseLeave={()=>{
              setMouseInCloseArea(true)
            }}
            >
              <IoMdClose className="absolute right-0 top-5 text-2xl lg:text-4xl text-black hover:text-red-700 mr-4 cursor-pointer mx-5" onClick={()=>{
                dispatch(
                  cartActions.closeCart()
                )
                
              }}/>
              <div className="cart-item-holder z-[500]">
              {
                getCart().map((item,index)=>{
                  return (<CartItem key={index} product={item.product} varient={item.varient} quantity={item.quantity}/>)
                })
              }
              {
                getCart().map((item,index)=>{
                  return (<CartItem key={index} product={item.product} varient={item.varient} quantity={item.quantity}/>)
                })
              }
              
              </div>
                <div className="absolute bottom-0 w-full flex justify-evenly items-center flex-col px-4 py-2  h-[150px]">
                  <div className='flex justify-between items-center w-full'>
                    <h3 className="text-md text-gray-500">Total</h3>
                    <h3 className="text-md ">LKR. {getTotalOfCart().toFixed(2)}</h3>  
                  </div>  
                  <div className='w-full flex justify-center flex-row'>
                    <button className='text-[14px] z-[100] hover:bg-red-900 product-add-to-cart-button bg-primary text-white p-[10px] w-[150px]  lg:text-[14px] mx-4' onClick={
                      ()=>{
                        navigate('/cart')
                      }
                    } >Checkout</button>
                    <button className='text-[14px] z-[100] hover:bg-red-900 product-add-to-cart-button bg-primary text-white p-[10px] w-[150px]  lg:text-[14px] mx-4' onClick={()=>{
                      emptyCart()
                    }}>Empty cart</button>
                  </div>
                </div>
                
            </div>
           
        </div>
        
    )
}

