import { useEffect, useRef, useState } from 'react';
import PropTypes from "prop-types";

const ImageZoom = ({ imageLink , scale , imageWidth , imageHeight , containerScale}) => {
    
    
    const resultDiv = useRef(null);
    const imageRef = useRef(null);
    const selector = useRef(null);
    const [isMouseIn, setIsMouseIn] = useState(false);
    scale = scale * containerScale;
    const [xPosition, setXPosition] = useState(0);
    const [yPosition, setYPosition] = useState(0);
    useEffect(() => {
        if(resultDiv.current && imageRef.current){
            if(isMouseIn){                
                const image = imageRef.current;
                selector.current.style.width = `${image.width/scale*containerScale}px`;
                selector.current.style.height = `${image.height/scale*containerScale}px`;               
                const selectorWidth = selector.current.clientWidth;
                const selectorHeight = selector.current.clientHeight;
                let x = xPosition - selectorWidth/2;
                let y = yPosition - selectorHeight/2;
                if(x < 0){
                    selector.current.style.left = 0;
                }
                else if(x > image.clientWidth - selectorWidth){
                    selector.current.style.left = `${image.clientWidth - selectorWidth}px`;
                    x = image.clientWidth - selectorWidth;
                }
                else{
                    selector.current.style.left = `${x}px`;
                }
                if(y < 0){
                    selector.current.style.top = 0;
                    y=0;
                }
                else if(y > image.clientHeight - selectorHeight){
                    selector.current.style.top = `${image.clientHeight - selectorHeight}px`;
                    y = image.clientHeight - selectorHeight;
                }
                else{
                    selector.current.style.top = `${y}px`;
                }
                //set image background to result div
                resultDiv.current.style.backgroundImage = "url('" + imageLink+ "')";
                resultDiv.current.style.backgroundRepeat = "no-repeat";
                resultDiv.current.style.backgroundSize = `${image.width * scale}px ${image.height * scale}px`;
                resultDiv.current.style.backgroundPosition = `-${x*scale}px -${y*scale}px`;
                resultDiv.current.style.width = `${image.width*containerScale}px`;
                resultDiv.current.style.height = `${image.height*containerScale}px`;
                resultDiv.current.style.position = "absolute";
                resultDiv.current.style.top = 0;
                resultDiv.current.style.left = `${image.clientWidth}px`;
                resultDiv.current.style.zIndex = 100;
                resultDiv.current.style.border = "1px solid #ccc";
                resultDiv.current.style.borderRadius = "4px";
                resultDiv.current.style.boxShadow = "0 0 5px 0 #ccc";
               

            }            
        }
    },[resultDiv, imageRef, isMouseIn, xPosition, yPosition, imageLink, scale, containerScale]);
    return(
            <>
                <div className='relative w-full h-full' onMouseEnter={()=>{                    
                    setIsMouseIn(true);
                }}
                onMouseLeave={()=>{
                    setIsMouseIn(false);
                }}
                onMouseMove={(e)=>{                    
                        setXPosition(e.nativeEvent.offsetX);
                        setYPosition(e.nativeEvent.offsetY);
                    }
                }>
                    <div className='absolute top-0 left-0 z-[60] w-full h-full cursor-crosshair' >

                    </div>
                    <div className={`absolute  z-[50]  border border-blue-400  ${!isMouseIn?'hidden':''}`} ref={selector}>

                    </div>
                    <img src={imageLink} alt='product' className={`w-[${imageWidth}] h-[${imageHeight}] object-fit`} ref={imageRef}/>
                </div>
                
                <div className={`absolute top-0  w-full h-full ${!isMouseIn?'hidden':''}`} ref={resultDiv}>                    
                </div>
                

            </>            
    )  
};
ImageZoom.defaultProps = {
    scale: 2,
    imageWidth: "100%",
    imageHeight: "100%",
    containerScale: 1
};


ImageZoom.propTypes = {
    imageLink: PropTypes.string.isRequired,
    scale: PropTypes.number.isRequired,
    imageWidth: PropTypes.string.isRequired,
    imageHeight: PropTypes.string.isRequired,
    containerScale: PropTypes.number.isRequired
};

export default ImageZoom;
