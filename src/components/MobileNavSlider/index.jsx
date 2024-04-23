import { IoMdClose } from "react-icons/io";
import "./index.css"
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
export default function MobileNavSlider({mobileNavClosing , setMobileNavClosing}){
    return(
        <div className={`h-[100vh]   lg:hidden mobile-nav fixed   z-[190]   top-0 ${mobileNavClosing?"mobile-nav-background-closed":"w-full bg-[#00000066]"} `} onClick={()=>{
          
            setMobileNavClosing(true)
  
          }} >
            {
                //cartClosing?"cart-slider-background-close":"w-full bg-[#00000066]"}`
            }
            <div className={`h-full w-[75%] bg-white fixed overflow-hidden  top-0 z-[100] flex mobile-nav-items ${mobileNavClosing?"mobile-nav-closed":""}`}>
              <IoMdClose className="absolute right-0 top-5 text-2xl lg:text-4xl text-black hover:text-red-700 mr-4 cursor-pointer mx-5" onClick={()=>{
                setMobileNavClosing(true)
                
              }}/>
              <div className="w-full h-full flex flex-col pt-16 items-center">
                <NavLink to="/" className="text-2xl lg:text-4xl text-black hover:text-primary mx-5 my-2" onClick={()=>{setMobileNavClosing(false)} }>Home</NavLink>
                <NavLink to="/shop" className="text-2xl lg:text-4xl text-black hover:text-primary mx-5 my-2" onClick={()=>{setMobileNavClosing(false)} }>Shop</NavLink>
                <NavLink to="/about" className="text-2xl lg:text-4xl text-black hover:text-primary mx-5 my-2" onClick={()=>{setMobileNavClosing(false)} }>About</NavLink>
                <NavLink to="/contact" className="text-2xl lg:text-4xl text-black hover:text-primary mx-5 my-2" onClick={()=>{setMobileNavClosing(false)} }>Contact</NavLink>
              </div>           
            </div>
          </div> 
    )
    
}
MobileNavSlider.propTypes = {
    mobileNavClosing : PropTypes.bool,
    setMobileNavClosing : PropTypes.func
}