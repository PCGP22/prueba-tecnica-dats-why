import * as yup from "yup"

export const basicSchema = yup.object().shape({
    name: yup.string().min(5, {message:"El nombre debe tener mínimo 5 caracteres"}).max(30, {message:"El nombre no puede pasar los 30 caracteres"}).required(),
    description: yup.string().min(10,{message:"La descripción debe ser de mínimo 10 caracteres"}).max(300,{message: "La descripción no puede sobrepasar los 300 caracteres"}).required(),
      fechaInicio: yup.date().min(new Date()).required(),
      fechaFin: yup.date().min(new Date()).required(),
      image: yup.string().optional()
})