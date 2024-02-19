import { useState } from "react";
import ImageZoom from "../ImageZoom";
import PropTypes from "prop-types";
export default function ProductImageSlider({imgLinks}){
    const [active, setActive] = useState(0);
    
    return (
        <>        
            <div className="w-full aspect-square flex flex-col items-center justify-center ">
                <ImageZoom imageLink={imgLinks[active]} scale={4} imageWidth="300px" imageHeight="auto" containerScale={1}/>            
            </div>
            <div className=" max-w-full flex flex-row justify-center mt-2">
            {imgLinks.map((link, index) => {
                return (
                    <div key={index} className="w-12 h-12 border border-gray-300 flex items-center justify-center mx-1 cursor-pointer" onClick={() => setActive(index)}>
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