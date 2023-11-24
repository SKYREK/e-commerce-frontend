import { useState } from "react";
import { useEffect } from "react"
import {FaRegUser, FaUser, FaUserAlt, FaUserCircle} from 'react-icons/fa'
import "./index.css"
import logo from "../../assets/images/logo.png"
import CartIcon from "../CartIcon";
export default function Header() {
    const [scrollFixed, setScrollFixed] = useState(false);

    useEffect(() => {
      //get current scroll position
      
      window.addEventListener("scroll", function(){
        //get current scroll position
        let st = window.pageYOffset || document.documentElement.scrollTop;
        //set previous scroll position
        console.log(st)
      }, false);
    }
    , [])
    return (
    <header className="header"> 
      <div className=" w-full  h-[60px] lg:h-[120px] flex justify-center relative  items-center ">
        <img src={logo} alt="logo" className=" w-[35%] object-contain absolute" />
        <div className="w-full relative h-full flex justify-center items-center">
          <div className="absolute right-0 text-2xl lg:text-4xl flex flex-row px-5">
            <FaRegUser className=" text-black hover:text-primary mr-4 cursor-pointer mx-5"/>
            <CartIcon count={12}/>
          </div>        
        </div>        
      </div>
      <div className="hidden w-full h-[54px] lg:flex justify-center bg-primary  items-center sticky top-0">
        <h1 className="text-4xl text-white">Header</h1>
      </div>
    </header>
    
  )
}