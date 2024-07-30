import "./Item.scss"
import { Link } from "react-router-dom";

const Item = ({ producto }) =>
    <div className="producto">
      <div className="over-hidden"><img src={producto.img} alt="" /></div>
      <h2>{producto.name}</h2>
      <p>{producto.description}</p>
      <p>${producto.price}</p>
      <Link to={"/detalle/" + producto.id} style={{ color: "black" }}>
        <button className="boton-detalles">Ver detalles</button>
      </Link>
    </div>
export default Item;
