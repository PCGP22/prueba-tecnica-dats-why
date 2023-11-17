import { useFormik } from "formik";
import { basicSchema } from "../schemas/form";

function EventForm() {
  const onSubmit = () => {
    console.log("listo");
  };

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      description: "",
      fechaInicio: "",
      fechaFin: "",
      image: "",
    },
    validationSchema: basicSchema,
    onSubmit,
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
        />
      </fieldset>
      <fieldset>
        <label htmlFor="description">Descripción:</label>
        <br />
        <textarea
          id="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="fechaInicio">Fecha de inicio:</label>
          <br />
          <input
            type="date"
            id="fechaInicio"
            value={values.fechaInicio}
            onChange={handleChange}
            onBlur={handleBlur}
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
          />
        </div>
      </fieldset>
      <fieldset>
        <label htmlFor="image">URL de la imagen de tu evento (opcional):</label>
        <br />
        <input
          id="image"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </fieldset>
      <fieldset>
        <button>Listo, crear evento</button>
      </fieldset>
    </form>
  );
}

export default EventForm;
