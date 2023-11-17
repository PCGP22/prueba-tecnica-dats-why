import { useFormik } from "formik";
import { basicSchema } from "../schemas/form";
import { DatePicker } from "@mui/x-date-pickers";
import { Input } from "@mui/material";
import { Textarea } from "@mui/joy";
import Button from "@mui/joy/Button/Button";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useAddEvent } from "../hooks/addEvent";

function EventForm() {
  const [processEvent] = useAddEvent();
  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
      fechaInicio: Date.now(),
      fechaFin: Date.now(),
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
        <br />
        <input
          placeholder="5-30 caracteres"
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
        <Textarea
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
          {/* <label htmlFor="fechaInicio">Fecha de inicio:</label> */}
          <input
            type="date"
            label="Fecha de inicio"
            value={dayjs(values.fechaInicio)}
            onChange={(value) =>
              setFieldValue("fechainicio", Date.parse(value))
            }
            //   onChange={(e) => console.log(e.target.value)}
            disablePast
            className={
              errors.fechaInicio && touched.fechaInicio ? "input__error" : ""
            }
          />
        </div>
        <div>
          {/* <label htmlFor="fechaFin">Fecha de inicio:</label> */}

          <input
            type="date"
            label="Fecha de termino"
            value={values.fechaFin}
            disablePast
            onChange={handleBlur}
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
        <textarea
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
        <Button type="submit">Listo, crear evento</Button>
      </fieldset>
    </form>
  );
}

export default EventForm;
