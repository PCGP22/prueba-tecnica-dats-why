import React from "react";

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
          <label htmlFor="fechaInicio">Fecha de inicio:</label>
          <br />
          <input id="fechaInicio" />
        </div>
      </fieldset>
    </form>
  );
}

export default EventForm;
