import { useState } from "react";
import ImageZoom from "../ImageZoom";
import PropTypes from "prop-types";
import MobileImageSwiper from "../MobileImageSwiper";
export default function ProductImageSlider({imgLinks}){
    const [active, setActive] = useState(0);
    
    
    return (
        <>        
            <div className="w-full aspect-square hidden lg:flex flex-col items-center justify-center ">
                <ImageZoom imageLink={imgLinks[active]} scale={4} imageWidth="300px" imageHeight="auto" containerScale={1}/>            
            </div>
            <div className="w-full lg:hidden flex flex-col items-center justify-center ">
                <MobileImageSwiper imgLinks={imgLinks} setCurrentSlide={setActive} />
            </div>
            <div className=" max-w-full flex flex-row justify-center mt-2">
            {imgLinks.map((link, index) => {
                return (
                    <div key={index} className={`w-12 h-12 border ${index==active?"border-primary":"border-gray-300"} flex items-center justify-center mx-1 cursor-pointer`} onClick={() => setActive(index)}>
                        <img src={link} alt="product image" className="w-full h-full object-cover"/>
                    </div>
                )
            })}
            </div>
        </>


    )
}
//add props validation
ProductImageSlider.propTypes = {
    imgLinks: PropTypes.arrayOf(PropTypes.string).isRequired
}