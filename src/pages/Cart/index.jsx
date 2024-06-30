import CartPageItem from '../../components/CartPageItem';
import { emptyCart, getCart, getTotalOfCart } from '../../utils/cart';
export default function Cart(){
    const cartItems = getCart();    
    return(
        <div className="w-full flex items-center justify-center">
            <div className="w-full lg:w-[1200px]  flex justify-between flex-col lg:flex-row">
                {cartItems.map((item,index)=>{
                    return (<CartPageItem key={index} product={item.product} varient={item.varient} quantity={item.quantity}/>)
                })
                }

            </div>
        </div>
    )
}