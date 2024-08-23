import "./ItemDetailContainer.scss"
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore';
import db from '../../db/db.js';
import { MoonLoader } from 'react-spinners';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { idProducto } = useParams()
    const [estaCargando, setEstaCargando] = useState(true);

    const obtenerProductos = async () => {
        try {
            const docRef = doc(db, 'products', idProducto);
            const dataDb = await getDoc(docRef);
            const data = { id: dataDb.id, ...dataDb.data() };
            setProducto(data);
        } catch (error) {
            console.log(error);
        } finally {
            setEstaCargando(false);
        }
    };

    useEffect(() => {
        obtenerProductos();
    }, [idProducto]);

    return (
        <div>
            {estaCargando ? (
                <div className='estaCargando'>
                    <MoonLoader
                        color="#000000"
                        size={100}
                        speedMultiplier={1}
                    />
                </div>
            ) : (
                <ItemDetail producto={producto} />
            )}
        </div>
    )
}
export default ItemDetailContainer;
