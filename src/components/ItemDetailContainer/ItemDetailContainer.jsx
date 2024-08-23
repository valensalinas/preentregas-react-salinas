import "./ItemDetailContainer.scss"
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore';
import db from '../../db/db.js';
import { MoonLoader } from 'react-spinners';
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [estaCargando, setEstaCargando] = useState(true);
    const [error, setError] = useState(null);
    const { idProducto } = useParams();

    const obtenerProductos = async () => {
        try {
            const docRef = doc(db, 'products', idProducto);
            const dataDb = await getDoc(docRef);

            if (dataDb.exists()) {
                const data = { id: dataDb.id, ...dataDb.data() };
                setProducto(data);
            } else {
                throw new Error('Producto no encontrado😔');
            }
        } catch (error) {
            setError(error.message);
            console.log(error);
        } finally {
            setEstaCargando(false);
        }
    };

    useEffect(() => {
        obtenerProductos();
    }, [idProducto]);

    if (estaCargando) {
        return (
            <div className='estaCargando'>
                <MoonLoader
                    color="#000000"
                    size={100}
                    speedMultiplier={1}
                />
            </div>
        );
    }

    if (error) {
        return (
            <div className="pantalla-error">
                <h2>Error 404</h2>
                <p>{error}</p>
                <Link to="/">
                    <button className='boton-error'>Volver</button>
                </Link>
            </div>
        );
    }

    return (
        <div>
                <ItemDetail producto={producto} />
        </div>
    );
}
export default ItemDetailContainer;
