import "./CartWidget.scss"
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div className="carrito">
            <FaShoppingCart size={30} color="black" />
            <p>1</p>
        </div>
    )
}

export default CartWidget