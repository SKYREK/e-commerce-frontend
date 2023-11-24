import { FaShoppingCart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5"
import { BsCart } from "react-icons/bs";
import PropTypes from "prop-types";

export default function CartIcon(props) {
    const count = props.count;
    return (
        <div className="relative cursor-pointer">
            <div className="absolute top-0 right-0 w-4 lg:w-6 h-4 lg:h-6 rounded-full bg-primary text-white text-xs  flex justify-center items-center">{count}</div>
            <BsCart className="text-2xl lg:text-4xl text-black hover:text-primary cursor-pointer"/>
        </div>
    )
}

CartIcon.propTypes = {
    count: PropTypes.number,
}