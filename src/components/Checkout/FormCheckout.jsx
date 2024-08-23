import './Checkout.scss';

const FormCheckout = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
    return (
        <form onSubmit={handleSubmitForm} className="form-checkout">

            <h3>Finalizar Compra</h3>

            <label>Nombre</label>
            <input type="text" name="nombre" value={datosForm.nombre} onChange={handleChangeInput} placeholder='Nombre y Apellido' />

            <label>Telefono</label>
            <input type="text" name="telefono" value={datosForm.telefono} onChange={handleChangeInput} placeholder='Tel'/>

            <label>Email</label>
            <input type="email" name="email" value={datosForm.email} onChange={handleChangeInput} placeholder='Email' />

            <label>Confirmar Email</label>
            <input type="email" name="confirmEmail" value={datosForm.confirmEmail} onChange={handleChangeInput} placeholder='Confirmar Email'/>

            <button type="submit" className="button-form">
                Enviar orden
            </button>
        </form>
    );
};
export default FormCheckout;
