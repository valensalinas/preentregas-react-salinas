import "./ItemCount.scss";
import { useState } from "react";

const ItemCount = ({ stock, agregarAlCarrito }) => {
    const [count, setCount] = useState(1);

    const aumentar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const disminuir = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="itemcount">
            <button className="mas-menos" onClick={disminuir}>-</button>
            <p className="numerito">{count}</p>
            <button className="mas-menos" onClick={aumentar}>+</button>

            <button className="agregar-carrito" onClick={() => agregarAlCarrito(count)}>Agregar al carrito</button>
        </div>
    );
};
export default ItemCount;