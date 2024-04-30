import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import "./index.css"
import CountDown from '../CountDown';
import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
export default function ProductCard(props){
    const { product } = props;
    const [isDiscounted , setIsDiscounted] = useState(false);
    //const dispatch = useDispatch();
    useEffect(()=>{
        if(product.labeledPrice === product.lastPrice && isDiscounted==true){
            setIsDiscounted(false);
        }else if(product.labeledPrice !== product.lastPrice && isDiscounted==false){
            setIsDiscounted(true);
        }
    },[isDiscounted,product.labeledPrice,product.lastPrice])

    return(
        <Link to={"/product?id="+product._id} className="w-[150px] lg:w-[260px]  aspect-auto lg:aspect-[30/40] my-1 mx-4   cursor-pointer flex flex-col items-center relative product-card">
            <div className='w-full aspect-square lg:h-[70%]  bg-[#f9f9f9] relative  product-base-image'>
                <img src={product.image[0]} alt="" className="w-full h-full object-contain"/>
                {product.offerEnding!==""&&<CountDown timeStamp={product.offerEnding}/>}
            </div>
            <div className='w-full h-auto lg:h-[30%] flex justify-center items-center  flex-col product-base-content'>
                <span className="text-[15px] lg:text-[20px] font-semibold text-[#2c2c2c]  lg:mb-5">{product.name}</span>
                {
                    isDiscounted ? (
                        <div className='w-full flex flex-row justify-center items-center'>
                            <span className="text-[10px] lg:text-[20px] font-semibold text-[#5e5e5e] line-through mx-1">Rs.{product.labeledPrice.toFixed(2)}</span>
                            <span className="text-[10px] lg:text-[20px] font-semibold text-[#2c2c2c] mx-1">Rs.{product.lastPrice.toFixed(2)}</span>                            
                        </div>
                    ) : <span className="text-[10px] lg:text-[20px] font-semibold text-[#2c2c2c]">Rs.{product.labeledPrice.toFixed(2)}</span>
                }
                <button className='lg:hidden  bg-primary text-white p-[10px]  text-[10px]'>ADD TO CART</button>
                
            </div>
            <div className='large-product-overlay  w-full h-full absolute overflow-hidden'>
                <div className='w-full hidden lg:block h-[50%] lg:h-[70%]  bg-[#f9f9f9] relative   product-inner-image'>
                    <img src={product.image[1]} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className='w-full h-[50%] lg:h-[30%] hidden justify-center items-center  flex-col product-inner-content'>
                    <span className="text-[10px] lg:text-[20px] font-semibold text-[#2c2c2c]  mb-5">{product.name}</span>
                    {
                        isDiscounted ? (
                            <div className='w-full flex flex-row justify-center items-center relative'>
                                <span className="text-[10px] lg:text-[20px] font-semibold text-white line-through mx-1">Rs.{product.lastPrice.toFixed(2)}</span>
                                <span className="text-[10px] lg:text-[20px] font-semibold text-white mx-1 relative">Rs.{product.labeledPrice.toFixed(2)}</span>
                                <button className='absolute product-add-to-cart-button bg-primary text-white p-[10px]  lg:text-[14px]'>ADD TO CART</button>
                            </div>
                        ) : 
                            <div className='w-full flex flex-row justify-center items-center relative'>
                                <span className="text-[10px] lg:text-[20px] font-semibold text-[#2c2c2c]">Rs.{product.labeledPrice.toFixed(2)}</span>
                                <button className='absolute product-add-to-cart-button bg-primary text-white p-[10px]  lg:text-[14px]'>ADD TO CART</button>
                            </div>
                    }
                    
                </div>
            </div>
            
        </Link> 
    )
}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
};
