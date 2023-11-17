import EventCard from "./EventCard";
import { useAppSelector } from "./redux/hooks/hooks";
import { useAppDispatch } from "./redux/hooks/hooks";
import { setPrevPage, setNextPage } from "./redux/Slices/eventsMgr";

type event = {
  nombre: string;
  descripcion: string;
  coordenadas?: [number, number];
  fechas: [string, string];
  urlDeImagen: string;
};

function CardsContainer() {
  const allData: event[] = useAppSelector(
    (state) => state.eventsMgrReducer.currentEvents
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setPrevPage())}>{"<"}</button>
      {allData.map((d, i) => (
        <EventCard info={d} key={d.nombre + i} />
      ))}
      <button onClick={() => dispatch(setNextPage())}>{">"}</button>
    </div>
  );
}

export default CardsContainer;
