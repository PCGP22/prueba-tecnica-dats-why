function EventForm() {
  return (
    <form>
      <fieldset>
        <label htmlFor="name">Nombre de tu evento:</label>
        <br />
        <input id="name" />
      </fieldset>
      <fieldset>
        <label htmlFor="description">Descripción:</label>
        <br />
        <textarea id="name" />
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="fechaInicio">Fecha de inicio:</label>
          <br />
          <input id="fechaInicio" />
        </div>
        <div>
          <label htmlFor="fechaFin">Fecha de inicio:</label>
          <br />
          <input id="fechaFin" />
        </div>
      </fieldset>
      <fieldset>
        <label htmlFor="image">URL de la imagen de tu evento:</label>
        <br />
        <input id="image" />
      </fieldset>
      <fieldset>
        <button>Listo, crear evento</button>
      </fieldset>
    </form>
  );
}

export default EventForm;
