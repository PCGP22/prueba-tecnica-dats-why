import { useFormik } from "formik";
import { basicSchema } from "../schemas/form";
import { useAddEvent } from "../hooks/addEvent";

function EventForm() {
  const [processEvent] = useAddEvent();
  const todayDate = new Date();
  const formatDate =
    todayDate.getDate() < 10 ? `0${todayDate.getDate()}` : todayDate.getDate();
  const formatMonth =
    todayDate.getMonth() < 10
      ? `0${todayDate.getMonth()}`
      : todayDate.getMonth();
  const formattedDate = [todayDate.getFullYear(), formatMonth, formatDate].join(
    "-"
  );
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        description: "",
        fechaInicio: formattedDate,
        fechaFin: formattedDate,
        image: "",
      },
      validationSchema: basicSchema,
      onSubmit: (values, actions) => {
        processEvent(values);
        actions.resetForm();
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">Nombre de tu evento:</label>
        <input
          placeholder="5-30 caracteres"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.name && touched.name ? "input__error" : ""}
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}
      </fieldset>
      <fieldset>
        <label htmlFor="description">Descripción:</label>
        <textarea
          placeholder="10-300 caracteres"
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.description && touched.description ? "input__error" : ""
          }
        />
        {errors.description && touched.description && (
          <p className="error">{errors.description}</p>
        )}
      </fieldset>
      <fieldset className="dateContainer">
        <div>
          <label htmlFor="fechaInicio">Fecha de inicio:</label>
          <input
            type="date"
            id="fechaInicio"
            value={values.fechaInicio}
            min={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
            className={
              errors.fechaInicio && touched.fechaInicio ? "input__error" : ""
            }
          />
        </div>
        <div>
          <label htmlFor="fechaFin">Fecha de termino:</label>
          <input
            type="date"
            id="fechaFin"
            value={values.fechaFin}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
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
          placeholder="Imagen URL"
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
        <button type="submit">Listo, crear evento</button>
      </fieldset>
    </form>
  );
}

export default EventForm;
