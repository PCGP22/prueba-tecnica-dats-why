import { useFormik, FormikHelpers } from "formik";
import { basicSchema } from "../schemas/form";
import { DateTimePicker } from "@mui/x-date-pickers";

function EventForm() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        description: "",
        fechaInicio: new Date(),
        fechaFin: new Date(),
        image: "",
      },
      validationSchema: basicSchema,
      onSubmit: (values, actions) => {
        console.log("listo", values);
        actions.resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">Nombre de tu evento:</label>
        <br />
        <input
          id="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.name && touched.name ? "input__error" : ""}
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}
      </fieldset>
      <fieldset>
        <label htmlFor="description">Descripción:</label>
        <br />
        <textarea
          id="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.description && touched.description ? "input__error" : ""
          }
        />
        {errors.description && touched.description && (
          <p className="error">{errors.name}</p>
        )}
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="fechaInicio">Fecha de inicio:</label>
          <br />
          <DateTimePicker
            label="Controlled picker"
            value={values.fechaInicio}
            onChange={handleChange}
            className={
              errors.fechaInicio && touched.fechaInicio ? "input__error" : ""
            }
          />
          <input
            type="date"
            id="fechaInicio"
            min={values.fechaInicio}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.fechaInicio && touched.fechaInicio ? "input__error" : ""
            }
          />
        </div>
        <div>
          <label htmlFor="fechaFin">Fecha de inicio:</label>
          <br />
          <input
            type="date"
            id="fechaFin"
            value={values.fechaFin}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.fechaFin && touched.fechaFin ? "input__error" : ""
            }
          />
        </div>
        {errors.fechaInicio && touched.fechaInicio && (
          <p className="error">{errors.name}</p>
        )}
        {errors.fechaFin && touched.fechaFin && (
          <p className="error">{errors.name}</p>
        )}
      </fieldset>
      <fieldset>
        <label htmlFor="image">URL de la imagen de tu evento (opcional):</label>
        <br />
        <input
          id="image"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.image && touched.image ? "input__error" : ""}
        />
        {errors.image && touched.image && (
          <p className="error">{errors.name}</p>
        )}
      </fieldset>
      <fieldset>
        <button>Listo, crear evento</button>
      </fieldset>
    </form>
  );
}

export default EventForm;
