import { useState } from "react";
import { useEffect } from "react"
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import "./index.css"
import logo from "../../assets/images/logo.png"
import CartIcon from "../CartIcon";
import UserDropdown from "../UserDropDown";
import { NavLink } from "react-router-dom";

export default function Header() {
    //const [scrollFixed, setScrollFixed] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [navFixed, setNavFixed] = useState(false);
    const [mobileNavFixed, setMobileNavFixed] = useState(false);
    const [mobileNavClosing, setMobileNavClosing] = useState(false);
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
    , [navFixed,mobileNavFixed])
    return (
    <>
      {
        mobileNav&&
        <div className={`h-[100vh]  overflow-x-hidden lg:hidden mobile-nav fixed   z-[190] w-full  top-0 ${!mobileNavClosing&&"bg-[#00000066]"} `} onClick={()=>{
          
          setMobileNavClosing(true)
          //run once after one second
          setTimeout(() => {
            setMobileNav(false);
            setMobileNavClosing(false);
          }, 400);

        }} >
          
          <div className={`h-full w-[75%] bg-white fixed  top-0 z-[100] flex mobile-nav-items ${mobileNavClosing&&"mobile-nav-closed"}`}>
            <IoMdClose className="absolute right-0 top-5 text-2xl lg:text-4xl text-black hover:text-red-700 mr-4 cursor-pointer mx-5" onClick={()=>{
              setMobileNavClosing(true)
              //run once after one second
              setTimeout(() => {
                setMobileNav(false);
                setMobileNavClosing(false);
              }, 400);
              
            }}/>
            <div className="w-full h-full flex flex-col pt-16 items-center">
              <NavLink to="/" className="text-2xl lg:text-4xl text-black hover:text-primary mx-5 my-2" onClick={()=>{setMobileNav(false)} }>Home</NavLink>
              <NavLink to="/shop" className="text-2xl lg:text-4xl text-black hover:text-primary mx-5 my-2" onClick={()=>{setMobileNav(false)} }>Shop</NavLink>
              <NavLink to="/about" className="text-2xl lg:text-4xl text-black hover:text-primary mx-5 my-2" onClick={()=>{setMobileNav(false)} }>About</NavLink>
              <NavLink to="/contact" className="text-2xl lg:text-4xl text-black hover:text-primary mx-5 my-2" onClick={()=>{setMobileNav(false)} }>Contact</NavLink>
            </div>           
          </div>
        </div>        
      }     
      <header className={`header z-[99] flex justify-center items-center flex-col `} >
        <div className={`w-full lg:w-[1200px] z-[120] h-[60px] lg:h-[120px] flex justify-center  items-center ${mobileNavFixed?"fixed lg:z-[-200] top-0 lg:relative animated-nav  bg-white":"relative"}  `}>
          <img src={logo} alt="logo" className=" w-[35%] object-contain absolute" />
          <div className={`w-full relative h-full flex justify-center items-center`}>
            <FiAlignJustify className="absolute lg:hidden left-0 text-2xl lg:text-4xl text-black hover:text-primary ml-4 cursor-pointer mx-5" onClick={()=>setMobileNav(true)}/>
            <div className="absolute right-0 text-2xl lg:text-4xl flex flex-row px-5">
              <UserDropdown/>
              <select className="text-black hidden hover:text-primary mr-4 cursor-pointer mx-5">
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
              <CartIcon count={12}/>
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