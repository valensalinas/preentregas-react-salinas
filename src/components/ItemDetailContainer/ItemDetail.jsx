import "./ItemDetail.scss"
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {
    const { agregarProducto } = useContext(CartContext);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);

    const agregarAlCarrito = (contador) => {
        const productoCarrito = { ...producto, cantidad: contador }

        agregarProducto(productoCarrito);

        setMostrarItemCount(false);
    }

    return (
        <div className="itemdetail">
            <div className="imagen">
                <img src={producto.img} alt="" />
            </div>
            <div className="details">
                <div className="texto">
                    <h2 className="titulo-producto">{producto.name}</h2>
                    <p className="descripcion-producto">{producto.description}</p>
                    <p>Stock: {producto.stock}</p>
                    <p>${producto.price}</p>
                </div>
                {mostrarItemCount ? (
                    <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
                ) : (
                    <Link to="/cart" className="button-detail">
                        Ir al carrito
                    </Link>
                )}
            </div>
        </div>
    );
};
export default ItemDetail;
