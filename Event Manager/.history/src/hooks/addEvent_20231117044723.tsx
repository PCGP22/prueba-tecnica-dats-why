import { useState, useEffect } from "react";
import { useAppDispatch } from "../components/redux/hooks/hooks";
import { addActivity } from "../components/redux/Slices/eventsMgr";

const useAddEvent = () => {
  const dispatch = useAppDispatch();
  const [newEvent, setNewEvent] = state({});

  function parseDates(number) {
    return new Date(number);
  }

  useEffect(() => {
    newEvent.nombre != undefined && dispatch(addActivity(newEvent));
  }, [newEvent]);

  function processEvent(event) {
    let parsedEvent = {
      nombre: event.name,
      descripcion: event.description,
      fechas: [parseDates(event.fechaInicio), parseDates(event.fechaFin)],
      coordenadas: [0, 0],
      urlDeImagen:
        event.image ??
        "https://www.entradas.com/magazine/fileadmin/_processed_/c/1/csm_outfit-conciertos_9cba9d8eb3.png",
    };
    setNewEvent(event);
  }
  return [processEvent];
};
