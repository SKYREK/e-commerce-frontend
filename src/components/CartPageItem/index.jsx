import PropTypes from 'prop-types'
import { FaTrashAlt } from 'react-icons/fa';
export default function CartPageItem(props) {
    const product = props.product;
    const varient = props.varient;
    const quantity = props.quantity;
    const selected = props.selected;
    const varientName = varient!=-1&&product.variants[varient].filters.map((item)=>item).join(" | ");
    return (
        <div className="flex items-center justify-between  w-full min-h-[127px] relative ">
            <div className="flex items-center absolute w-full pl-4 ">
                <img src={product.image[0]} alt="" className="w-[100px] h-[110px] object-center rounded-lg"/>
                <div className="ml-4 max-w-[250px]">
                    <h3 className="">{product.name}{" X "+quantity}</h3>
                    <p className="text-sm text-gray-500 " style={{wordWrap:"break-word"}}>{varient!=-1&&varientName}</p>
                    <p className="text-gray-500 text-sm right-4">LKR.{" "+varient!=-1?(product.variants[varient].lastPrice*quantity).toFixed(2):(product.lastPrice*quantity).toFixed(2)}</p>
                </div>
                <FaTrashAlt onClick={()=>{
                    console.log(props.key)
                }} className="text-slate-400 cursor-pointer hover:text-red-500 text-sm absolute left-[350px]"/>                
            </div>
            
            
        </div>
    )
}
CartPageItem.propTypes = {
    product : PropTypes.object,
    varient : PropTypes.number,
    quantity : PropTypes.number,
    key : PropTypes.number,
    selected : PropTypes.bool
}