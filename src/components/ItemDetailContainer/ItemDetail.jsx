import "./ItemDetail.scss"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {

    const agregarAlCarrito = (contador) => {
        const productoCarrito = { ...producto, cantidad: contador }

        console.log(productoCarrito)
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
                <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
            </div>

            
        </div>
    );
};
export default ItemDetail;
