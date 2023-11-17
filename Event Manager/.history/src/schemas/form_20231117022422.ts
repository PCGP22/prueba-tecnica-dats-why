import * as yup from "yup"

export const basicSchema = yup.ArraySchema.object().shape({
    name: yup.string().length(30).required(),
    description: yup.string().length(300).required(),
      fechaInicio:yup.string().required,
      fechaFin: yup.string().required(),
      image: yup.string().optional()
})