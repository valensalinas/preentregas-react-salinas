import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import FormCheckout from './FormCheckout';
import db from '../../db/db.js';
import validateForm from '../../utils/validacionForm.js';
import { toast } from 'react-toastify';
import { FcPaid } from "react-icons/fc";
import { Link } from 'react-router-dom';

import './Checkout.scss';

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        telefono: '',
        email: '',
        confirmEmail: '',
    });
    const [idOrden, setIdOrden] = useState(null);
    const { carrito, precioTotal } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        const orden = {
            comprador: { ...datosForm },
            productos: [...carrito],
            fecha: Timestamp.fromDate(new Date()),
            total: precioTotal(),
        };

        const response = await validateForm(datosForm);
        if (response.status === 'success') {
            sendOrder(orden);
        } else {
            toast.warning(response.message);
        }
    };

    const sendOrder = async (orden) => {
        try {
            const ordenesRef = collection(db, 'ordenes');
            const ordenDb = await addDoc(ordenesRef, orden);
            setIdOrden(ordenDb.id);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="checkout">
        {idOrden ? (
            <div className="order-completed">
                <FcPaid size={200}/>
                <h2>Compra realizada correctamente.</h2>
                <p>El ID de su órden es: <span className='idOrden'>{idOrden}</span> | Guárdelo para su retiro o recibirlo en su hogar.</p>
                <Link to="/">
                    <button className='button-volver-inicio'>Volver al Inicio</button>
                </Link>
            </div>
        ) : (
            <FormCheckout
                datosForm={datosForm}
                handleChangeInput={handleChangeInput}
                handleSubmitForm={handleSubmitForm}
            />
        )}
    </div>
    );
};
export default Checkout;
