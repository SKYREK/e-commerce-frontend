import PropTypes from 'prop-types';
import CartItem from '../cartItem';
import { getCart } from '../../utils/cart';
import { IoMdClose } from 'react-icons/io';
import "./index.css"
export default function CartSlider({cartClosing ,setCartClosing}){
    
    return(
        <div className={`h-[100vh]  overflow-x-hidden  mobile-nav fixed   z-[190]   top-0 right-0  ${cartClosing?"cart-slider-background-close":"w-full bg-[#00000066]"}`} onClick={()=>{
            setCartClosing(true)

          }} >
            
            <div className={`h-full w-[75%] lg:w-[400px] bg-white fixed overflow-hidden   top-0 right-0 z-[191] flex mobile-nav-items ${cartClosing?"cart-slider-closed":""}`}
            onClick={()=>{
              console.log("clicked")
            }}>
              <IoMdClose className="absolute right-0 top-5 text-2xl lg:text-4xl text-black hover:text-red-700 mr-4 cursor-pointer mx-5" onClick={()=>{
                setCartClosing(true)
                
              }}/>
              <div className="w-full h-full flex flex-col pt-16 items-center">
              {
                getCart().map((item,index)=>{
                  return (<CartItem key={index} product={item.product} varient={item.varient} quantity={item.quantity}/>)
                })
              }
              </div>           
            </div>
          </div>
    )
}
CartSlider.propTypes = {
    cartClosing : PropTypes.bool,
    setCartClosing : PropTypes.func
}
