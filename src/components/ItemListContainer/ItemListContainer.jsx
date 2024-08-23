import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.scss';
import { getDocs, collection, query, where } from 'firebase/firestore';
import db from '../../db/db.js';
import { MoonLoader } from 'react-spinners';

const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);
    const [estaCargando, setEstaCargando] = useState(false);
    const { idCategoria } = useParams();

    const getProducts = async () => {
        try {
            const productosRef = collection(db, 'products');
            const dataDb = await getDocs(productosRef);

            const data = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() };
            });

            setProductos(data);
            setEstaCargando(false);
        } catch (error) {
            console.log(error);
        }
    };

    const getProductsByCategory = async () => {
        try {
            const productosRef = collection(db, 'products');
            const q = query(productosRef, where('categoria', '==', idCategoria));
            const dataDb = await getDocs(q);

            const data = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() };
            });

            setProductos(data);
            setEstaCargando(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setEstaCargando(true);
        if (idCategoria) {
            getProductsByCategory();
        } else {
            getProducts();
        }
    }, [idCategoria]);

    return (
        <div className="itemlistcontainer">
            {estaCargando ? (
                <div className='estaCargando'>
                    <MoonLoader
                        color="#000000"
                        size={100}
                        speedMultiplier={1}
                    />
                </div>
            ) : (
                <div className='productosCargados'>
                    {!idCategoria && <p>{saludo}</p>}
                    <ItemList productos={productos} />
                </div>
            )}
        </div>
    );
};
export default ItemListContainer;
