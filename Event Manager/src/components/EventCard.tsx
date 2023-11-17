type event = {
  nombre: string;
  descripcion: string;
  coordenadas?: [number, number];
  fechas: [string, string];
  urlDeImagen: string;
};

function EventCard({ info }: { info: event }) {
  return (
    <figure>
      <img src={info.urlDeImagen} alt={`imagen de ${info.nombre}`} />
      <p>
        <span>{info.fechas[0]}</span> - <span>{info.fechas[1]}</span>
      </p>
      <h4>{info.nombre}</h4>
    </figure>
  );
}

export default EventCard;
