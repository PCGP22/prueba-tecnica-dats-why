import { useState, useEffect } from "react";
import { useAppDispatch } from "../components/redux/hooks/hooks";
import { addActivity } from "../components/redux/Slices/eventsMgr";

type event = {
  nombre: string;
  descripcion: string;
  coordenadas?: number[];
  fechas: [string, string];
  urlDeImagen: string;
};

type eventNoParsed = {
  name: string;
  description: string;
  fechaInicio: number;
  fechaFin: number;
  image: string;
};

export const useAddEvent = () => {
  const dispatch = useAppDispatch();
  const [newEvent, setNewEvent] = useState<event>({
    nombre: "",
    descripcion: "",
    coordenadas: [0, 0],
    fechas: ["", ""],
    urlDeImagen: "",
  });

  function parseDates(number: number) {
    return new Date(number);
  }

  useEffect(() => {
    newEvent.nombre != undefined && dispatch(addActivity(newEvent));
  }, [newEvent, dispatch]);

  function processEvent(event: eventNoParsed) {
    const parsedEvent = {
      nombre: event.name,
      descripcion: event.description,
      fechas: [parseDates(event.fechaInicio), parseDates(event.fechaFin)],
      coordenadas: [0, 0],
      urlDeImagen:
        event.image ??
        "https://www.entradas.com/magazine/fileadmin/_processed_/c/1/csm_outfit-conciertos_9cba9d8eb3.png",
    };
    setNewEvent(parsedEvent);
  }
  return [processEvent];
};
