import Slider from "../../components/Slider";
import { productList } from "../../assets/sampledata";
import ProductCard from "../../components/ProductCard";



export default function HomePage(){
    return(
        <div className="w-full">
            <Slider/>
            <div className="w-full  flex items-center flex-col">
                <div className="w-full lg:w-[1200px] bg-red-900 flex flex-wrap justify-between">
                    {/* <div className="w-full lg:w-[350px] bg-blue-900 cursor-pointer">
                        fdgdsg
                    </div> 
                    <div className="w-full lg:w-[350px] bg-blue-900 cursor-pointer">
                        fdgdsg
                    </div> 
                    <div className="w-full lg:w-[350px] bg-blue-900 cursor-pointer">
                        fdgdsg
                    </div>                     */}
                </div>
                <div className="w-full lg:w-[1200px]  flex flex-col items-center ">
                    <h2 className="text-[30px] font-semibold">Trending products</h2>
                    <div className="w-full  flex flex-wrap justify-evenly lg:justify-between">
                        {
                            productList.map(
                                (product)=>(<ProductCard product={product} key={product.id}/>)
                            )
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}