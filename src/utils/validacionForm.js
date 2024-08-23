import { object, string, ref } from "yup";

let userSchema = object({
    nombre: string().required("Por favor ingrese su nombre y apellido"),
    telefono: string().required("Por favor ingrese su teléfono"),
    email: string()
        .email("El campo de email no tiene el formato correcto")
        .required("Por favor ingrese su email"),
    confirmEmail: string()
        .oneOf([ref('email')], "Los correos electrónicos no coinciden")
        .required("Por favor ingrese su email nuevamente")
});

const validateForm = async (dataForm) => {
    try {
        await userSchema.validate(dataForm);
        return { status: "success" };
    } catch (error) {
        return { status: "error", message: error.message };
    }
};

export default validateForm;
