import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { productList } from "../../assets/sampledata";
import { ZoomTest } from "../../components/TestComponents/ZoomTest";





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
        //get the first product from the the sampe dataset for demonstrate
        setProductData(productList[productId])
        //following codes are for demonstration purpose only. will be removed in after backend integration
        if(!productData){
            setProductReal(false);
        }

        if(productData){
            setProductLoaded(true);
            console.log(productData)
        }
    }, [productLoaded, productData,productReal,productId]);
    return(
        
            <ZoomTest/>            
        
    )
}