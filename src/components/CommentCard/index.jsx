import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

import PropTypes from "prop-types";
import { timeAgo } from "../../utils";
import { useState } from "react";
import ProductImageSlider from "../ProductImageSlider";
import "./index.css"

export default function CommentCard({ comment }) {
    // Component code here  
    const [fullscreen,setFullscreen] = useState(false)
    const [isMouseInCloseArea, setIsMouseInCloseArea] = useState(false);
    return(
        <div className="flex flex-col w-full border-b-2 mt-4">
            <div className="flex flex-row w-full relative">
                <Rating initialRating={comment.rating}
                    readonly
                    className="text-[15px] text-yellow-400"
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<FaStar />}
                />
                <span className="ml-2 text-[15px] font-semibold">{comment.username}</span>
                <span className="absolute right-0  text-[15px] font-normal">{timeAgo(comment.date)}</span>
            </div>
            <span className="w-full mt-2">{comment.review}</span>
            <div className="w-full flex flex-row mt-2">
                {
                    comment.images.map((image, index) => {
                        return (
                            <img src={image} alt="user" key={index} className="w-[50px] h-[50px] rounded-lg mr-2 cursor-pointer" onClick={()=>{
                                setFullscreen(true)
                            }}/>
                        )
                    })
                }
            </div>
            {
                fullscreen&&(
                    <div className="z-[150] fixed top-0 left-0 min-w-[100vw] min-h-[100vh] bg-[#00000020] flex justify-center items-center popup-container"
                    onClick={()=>{
                        if(isMouseInCloseArea)
                            setFullscreen(false)
                    }}
                    onMouseEnter={()=>{
                        setIsMouseInCloseArea(true)                    
                    }}>
                        <div className="w-[400px] border z-[100] bg-white" onMouseEnter={()=>{
                            setIsMouseInCloseArea(false)
                        }}
                        onMouseLeave={()=>{
                            setIsMouseInCloseArea(true)
                        }}>
                            <ProductImageSlider imgLinks={comment.images}/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
CommentCard.propTypes = {
    comment: PropTypes.object.isRequired
};