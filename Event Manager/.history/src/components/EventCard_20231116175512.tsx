type event = {
  nombre: string;
  descripcion: string;
  coordenadas?: [number, number];
  fechas: [Date, Date];
  urlDeImagen: string;
};

function EventCard({ info }: { info: event }) {
  return (
    <figure>
      <img src={info.urlDeImagen} alt={`imagen de ${info.nombre}`} />
      <p>
        <span>{info.fechas[0].toDateString()}</span> -{" "}
        <span>{info.fechas[1].toDateString()}</span>
      </p>
      <h4>{info.nombre}</h4>
    </figure>
  );
}

export default EventCard;
