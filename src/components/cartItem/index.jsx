import PropTypes from 'prop-types'
export default function CartItem(props) {
    const product = props.product;
    const varient = props.varient;
    const quantity = props.quantity;
    const varientName = varient!=-1&&product.variants[varient].filters.map((item)=>item).join(" | ");
    return (
        <div className="flex items-center justify-between mb-4 w-full">
            <div className="flex items-center">
                <img src={product.image[0]} alt="" className="w-16 h-16 object-cover rounded-lg"/>
                <div className="ml-4">
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="text-sm text-gray-500">{varient!=-1&&varientName}</p>
                    <p className="text-sm text-gray-500">Quantity: {quantity}</p>
                </div>
            </div>
            <p className="font-bold text-lg">LKR.{" "+varient!=-1?(product.variants[varient].lastPrice*quantity).toFixed(2):(product.lastPrice*quantity).toFixed(2)}</p>
        </div>
    )
}
CartItem.propTypes = {
    product : PropTypes.object,
    varient : PropTypes.number,
    quantity : PropTypes.number
}