import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { LiaTrashAlt } from 'react-icons/lia';
import './Cart.scss';

const Cart = () => {
    const { carrito, precioTotal, borrarProducto, vaciarCarrito } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div className="empty-cart">
                <h2>Aquí no hay nada 😖</h2>
                <Link to="/" className="button-empty-cart">
                    Mostrar productos
                </Link>
            </div>
        );
    }

    return (
        <div className='main-carrito'>
            <div className="cart">
                <ul className="cart-list">
                    {carrito.map((productoCarrito) => (
                        <li className="cart-item">
                            <img className='imagen-carrito' src={productoCarrito.img} alt="" />
                            <p className='nombre-producto'>{productoCarrito.name}</p>
                            <p className='cantidad-producto'>Cantidad: {productoCarrito.cantidad}</p>
                            <p className='precio-producto'>Precio c/u: ${productoCarrito.price}</p>
                            <p className='subtotal-producto'>Subtotal: ${productoCarrito.cantidad * productoCarrito.price} </p>
                            <p className='eliminar-producto'><LiaTrashAlt size={40} color="black" onClick={() => borrarProducto(productoCarrito.id)} /></p>
                        </li>
                    ))}
                </ul>

                <div className="cart-controls">
                    <h2>Precio Total: ${precioTotal()}</h2>
                    <div className="buttons">
                        <button className="button-cart" onClick={vaciarCarrito}>
                            <LiaTrashAlt size={40} color="yellow" />
                            <p>Vaciar Carrito</p>
                        </button>
                        <Link className="button-cart-finalizar" to="/checkout">
                            Finalizar Compra
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Cart;
