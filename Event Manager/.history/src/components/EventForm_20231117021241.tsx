import { useFormik } from "formik";

function EventForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      fechaInicio: "",
      fechaFin: "",
      image: "",
    },
  });
  return (
    <form>
      <fieldset>
        <label htmlFor="name">Nombre de tu evento:</label>
        <br />
        <input
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="description">Descripción:</label>
        <br />
        <textarea
          id="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="fechaInicio">Fecha de inicio:</label>
          <br />
          <input
            type="date"
            id="fechaInicio"
            value={formik.values.fechaInicio}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="fechaFin">Fecha de inicio:</label>
          <br />
          <input
            type="date"
            id="fechaFin"
            value={formik.values.fechaFin}
            onChange={formik.handleChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <label htmlFor="image">URL de la imagen de tu evento:</label>
        <br />
        <input
          id="image"
          value={formik.values.image}
          onChange={formik.handleChange}
        />
      </fieldset>
      <fieldset>
        <button>Listo, crear evento</button>
      </fieldset>
    </form>
  );
}

export default EventForm;
