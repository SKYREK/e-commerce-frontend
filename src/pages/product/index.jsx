import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { productList } from "../../assets/sampledata";
import ProductImageSlider from "../../components/ProductImageSlider";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import VarientSelector from "../../components/VarientSelector";




export default function ProductPage(){
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const productId = params.get("id")

    //boolean variable to set if a product is not found
    const [productReal, setProductReal] = useState(true);

    //store product data
    const [productData, setProductData] = useState(null);

    //is product loaded
    const [productLoaded, setProductLoaded] = useState(false);

    useEffect(() => {
        console.log(productId)
        console.log(productList[productId])
        //get the first product from the the sampe dataset for demonstrate
        setProductData(productList[productId])
        //following codes are for demonstration purpose only. will be removed in after backend integration
        if(!productData){
            setProductReal(false);
        }

        if(productData){
            setProductLoaded(true);
            setProductReal(true);
            console.log(productData)
        }
    }, [productLoaded, productData,productReal,productId]);
    return(
        <div className="w-full flex justify-center ">
            <div className="lg:w-[1200px] hidden lg:flex flex-row">
                <div className="w-[49%] border ">
                    {productLoaded&&<ProductImageSlider imgLinks={productData?.image}/>}
                </div>
                <div className="w-[49%] border flex flex-col items-center p-[50px]">
                    <span className="w-[90%] text-4xl font-semibold">{productData?.name}
                    {productData?.altNames.map((name ,index)=>{
                            return (
                                <span key={index} className="font-normal">{" | "+name}</span>
                            )
                        }
                    )}</span>
                    <Rating initialRating={5}
                    readonly
                    
                    className="w-[90%] mt-2  text-[20px]"
                    emptySymbol={<FaRegStar  className="text-yellow-400"/>}
                    fullSymbol={<FaStar  className="text-yellow-400"/>}/>
                    <div className="w-[90%] flex flex-col">
                        {
                            productData?.labeledPrice !== productData?.lastPrice ? (
                                <>
                                    <span className=" text-3xl font-semibold">LKR {productData?.labeledPrice.toFixed(2)}</span>
                                    <span className=" text-xl line-through">LKR {productData?.lastPrice.toFixed(2)}</span>
                                    
                                </>
                            ) : <span className="w-[90%]text-3xl">LKR {productData?.labeledPrice.toFixed(2)}</span>
                        }
                       
                    </div>
                    <span className="w-[90%] mt-2">{productData?.description}</span>
                    <div className="w-[90%] mt-2 flex flex-col">
                        {
                            productData?.variedBy?.map((varient , index) => {
                                return (
                                    <VarientSelector product={productData} varient={varient} varientTypePostion={index} key={index} selectVarient={0}/>
                                )
                            })
                        }
                    </div>

                </div>
                
            </div>
        </div>
            
        
    )
}