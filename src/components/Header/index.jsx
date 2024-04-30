import { useState } from "react";
import { useEffect } from "react"
import { FiAlignJustify } from "react-icons/fi";
import "./index.css"
import logo from "../../assets/images/logo.png"
import CartIcon from "../CartIcon";
import UserDropdown from "../UserDropDown";
import { getCart } from "../../utils/cart";
import CartSlider from "../CartSlider";
import MobileNavSlider from "../MobileNavSlider";
//import { useCartSlider } from "../../hooks/useCartOpenClose";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function Header() {
    console.log(getCart())
    //const [scrollFixed, setScrollFixed] = useState(false);
    const [navFixed, setNavFixed] = useState(false);
    const [mobileNavFixed, setMobileNavFixed] = useState(false);
    const [mobileNavClosing, setMobileNavClosing] = useState(true);
    //const [cartClosing,setCartClosing] = useState(true);
    const [firstLoad , setFirstLoad] = useState(true);
    //const {  } = useCartSlider()
    const dispatch = useDispatch();
    useEffect(() => {
      //get current scroll position
      
      window.addEventListener("scroll", function(){
        //get current scroll position
        let st = window.pageYOffset || document.documentElement.scrollTop;
        //set previous scroll position
        console.log(st);
        if(st>100&&!navFixed){
          setNavFixed(true);
        }else if(st<100&&navFixed){
          setNavFixed(false);
        }

        if(st>30&&!mobileNavFixed){
          setMobileNavFixed(true);
        }else if(st<30&&mobileNavFixed){
          setMobileNavFixed(false);
        }

      }, false);
      console.log(navFixed)
    }
    , [navFixed,mobileNavFixed ])
    return (
    <>
      {!firstLoad&&
        <>
        <MobileNavSlider setMobileNavClosing={setMobileNavClosing} mobileNavClosing={mobileNavClosing}/>            
        <CartSlider />
        </>
      }
      <header className={`header z-[99] flex justify-center items-center flex-col `} >
        <div className={`w-full lg:w-[1200px] z-[120] h-[60px] lg:h-[120px] flex justify-center  items-center ${mobileNavFixed?"fixed lg:z-[-200] top-0 lg:relative animated-nav  bg-white":"relative"}  `}>
          <img src={logo} alt="logo" className=" w-[35%] object-contain absolute" />
          <div className={`w-full relative h-full flex justify-center items-center`}>
            <FiAlignJustify className="absolute lg:hidden left-0 text-2xl lg:text-4xl text-black hover:text-primary ml-4 cursor-pointer mx-5" onClick={()=>setMobileNavClosing(false)}/>
            <div className="absolute right-0 text-2xl lg:text-4xl flex flex-row px-5">
              <UserDropdown/>
              <select className="text-black hidden hover:text-primary mr-4 cursor-pointer mx-5">
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
              <CartIcon onClick={
                ()=>
                {                  
                  dispatch(
                    cartActions.openCart()
                  )
                  setFirstLoad(false)
                }
              } count={12}/>
            </div>        
          </div>


        </div>
        <div className={`hidden  w-full h-[54px] z-[100] lg:flex justify-center bg-primary  items-center ${navFixed?" top-0 animated-nav":""}`}>
          <div className="w-[1200px] h-full flex  items-center">
            <ul className="flex flex-row justify-center items-center text-white text-sm lg:text-lg">
              <li className="mx-4 cursor-pointer hover:text-dark">Home</li>
              <li className="mx-4 cursor-pointer hover:text-dark">Shop</li>
              <li className="mx-4 cursor-pointer hover:text-dark">About</li>
              <li className="mx-4 cursor-pointer hover:text-dark">Contact</li>
            </ul>
          </div>
        </div>
      </header>
      
    </>
  )
}