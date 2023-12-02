import { useEffect, useState } from "react";
import slideOne from "../../assets/images/slider/1.png";
import slideTwo from "../../assets/images/slider/2.png";
import "./index.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const totalSlides = 2;
const contexts = [    
    <div className="absolute h-full w-full  flex justify-end sliderText" key={0}>
        <div className="w-1/2 h-full  flex justify-center items-center flex-col">
            <span className="text-text-gray text-[12px] lg:text-[19px] mt-2 lg:mt-[30px]">TRY THE NEW EVERY DAY</span>
            <span className="text-dark text-[20px] lg:text-[70px] mt-2 font-semibold lg:mt-[0px] text-center">Permanent Beauty</span>
            <span className="text-dark text-[12px] lg:text-[16px] mt-2 text-center lg:mt-[30px]">Get upto 20% off on first 10 orders and 10% off later</span>
            <button className="bg-primary text-white text-[10px] z-[100] mt-2 lg:text-[14px] px-[15px] py-[10px] lg:mt-[30px]">SHOP NOW</button>
        </div>
    </div>
    ,
    <div className="absolute h-full w-full  flex justify-start sliderText" key={1}>
        <div className="w-1/2  flex flex-col justify-center items-center">
            <span className="text-text-gray text-[12px] lg:text-[19px] mt-2 lg:mt-[30px]">TRY THE NEW EVERY DAY</span>
            <span className="text-dark text-[25px] lg:text-[70px] mt-2 font-semibold lg:mt-[0px]">Natural Beauty</span>
            <span className="text-dark text-[12px] lg:text-[16px] mt-2 text-center lg:mt-[30px]">Get upto 20% off on first 10 orders and 10% off later</span>
            <button className="bg-primary text-white text-[10px]  mt-2 lg:text-[14px] px-[15px] py-[10px] lg:mt-[30px]">SHOP NOW</button>
        </div>
    </div>
]
export default function Slider(){
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        //change slide every 5 seconds
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide==totalSlides-1?0:currentSlide+1)
            console.log(currentSlide)
        }, 3000);
        return () => clearInterval(interval);
    }
    , [currentSlide])
    return(
        <div className="max-w-full relative  aspect-[16/9] lg:aspect-[16/5] ">
            <img src={slideOne} alt="" className={`absolute w-full h-full object-cover ${currentSlide===0?"activeImage":"previousImage"}`}/>
            <img src={slideTwo} alt="" className={`absolute w-full h-full object-cover ${currentSlide===1?"activeImage":"previousImage"}`}/>
            
            <div className="w-full h-full absolute ">
                <div className="relative w-full h-full flex justify-center items-center arrow-holder">
                    <div className="absolute text-white left-16  arrow-left p-3  cursor-pointer bg-primary">
                        <FaArrowLeft  />
                    </div>
                    <div className="absolute text-white right-16  arrow-right p-3  cursor-pointer bg-primary">
                        <FaArrowRight />
                    </div>
                    {
                        contexts[currentSlide]
                    }
                </div>
                <div className="absolute bottom-0 w-full flex justify-center items-center h-10 flex-row">
                    {
                        contexts.map((context,index)=>(
                            <div key={index} className={`w-10 h-[2px] lg:w-20 lg:h-1   mx-1 cursor-pointer ${index===currentSlide?"bg-primary":"bg-black"}`}></div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}