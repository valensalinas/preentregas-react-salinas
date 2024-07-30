import "./CartWidget.scss"
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div className="cartwidget">
            <FaShoppingCart size={30} color="black" />
            <p>1</p>
        </div>
    )
}

export default CartWidget