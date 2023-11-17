import * as yup from "yup"

export const basicSchema = yup.object().shape({
    name: yup.string().min(5, "El nombre debe tener mínimo 5 caracteres").max(30, "El nombre no puede pasar los 30 caracteres").required("Este es un campo requerido"),
    description: yup.string().min(10,"La descripción debe ser de mínimo 10 caracteres").max(300,"La descripción no puede sobrepasar los 300 caracteres").required("Este es un campo requerido"),
      fechaInicio: yup.string().required("Este es un campo requerido"),
      fechaFin: yup.string().required("Este es un campo requerido"),
      image: yup.string().optional()
})