import PropTypes from 'prop-types'
export default function CartItem(props) {
    const product = props.product;
    const varient = props.varient;
    const quantity = props.quantity;
    const varientName = varient!=-1&&product.variants[varient].filters.map((item)=>item).join(" | ");
    return (
        <div className="flex items-center justify-between mb-4 w-full min-h-[127px] relative ">
            <div className="flex items-center absolute w-full  ">
                <img src={product.image[0]} alt="" className="w-[100px] h-[110px] object-cover rounded-lg"/>
                <div className="ml-4 ">
                    <h3 className="">{product.name}{" X "+quantity}</h3>
                    <p className="text-sm text-gray-500 " style={{wordWrap:"break-word"}}>{varient!=-1&&varientName}</p>
                    <p className="text-gray-500 text-sm right-4">LKR.{" "+varient!=-1?(product.variants[varient].lastPrice*quantity).toFixed(2):(product.lastPrice*quantity).toFixed(2)}</p>
                </div>
            </div>
            
        </div>
    )
}
CartItem.propTypes = {
    product : PropTypes.object,
    varient : PropTypes.number,
    quantity : PropTypes.number
}