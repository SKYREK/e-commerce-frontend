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

    //three states and one variable are needed for varient management.
    //selectedVarient
    //varientsAttributesArray
    //isVarientUpdated
    //var isManagingVarient = false/true

    const isManagingVarient = productData?.variedBy?.length > 0 ? true : false;
    
    const [selectedVarient, setSelectedVarient] = useState(-1);
    const [varientsAttributesArray, setVarientAttributesArray] = useState([]);
    const [isVarientUpdated, setIsVarientUpdated] = useState(false);
    useEffect(() => {
        //get the first product from the the sampe dataset for demonstrate
        setProductData(productList[productId])
        //following codes are for demonstration purpose only. will be removed in after backend integration
        if(!productData){
            setProductReal(false);
        }

        if(productData){
            setProductLoaded(true);
            setProductReal(true);
        }
        if(isManagingVarient){
            setSelectedVarient(-1);
            productData?.variants.map((variant,index)=>{
                if(varientsAttributesArray.toString() == variant.filters.toString()){
                    setSelectedVarient(index);
                }
            })
            
                
            
            
        }
    }, [productLoaded, productData,productReal,productId,isManagingVarient,isVarientUpdated,varientsAttributesArray]);
    
    return(
        <div className="w-full flex justify-center ">
            <div className="lg:w-[1200px] hidden lg:flex flex-row">
                <div className="w-[49%] border ">
                    {(selectedVarient == -1 &&productLoaded) &&
                        <ProductImageSlider imgLinks={productData?.image}/>
                    }
                    {(selectedVarient != -1 &&productLoaded && productData?.variants[selectedVarient].images.length>0) &&
                        <ProductImageSlider imgLinks={productData?.variants[selectedVarient].images}/>
                    }
                    {(selectedVarient != -1 &&productLoaded && productData?.variants[selectedVarient].images.length<=0) &&
                        <ProductImageSlider imgLinks={productData?.image}/>
                    }

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
                                    <VarientSelector product={productData} varient={varient} varientTypePostion={index} key={index}  varientsAttributesArray={varientsAttributesArray} setVarientAttributesArray={setVarientAttributesArray} setIsVarientUpdated={setIsVarientUpdated} />
                                )
                            })
                        }
                    </div>

                </div>
                
            </div>
        </div>
            
        
    )
}