import EventCard from "./EventCard";
import { useAppSelector } from "./redux/hooks/hooks";
import { useAppDispatch } from "./redux/hooks/hooks";
import { setPrevPage, setNextPage } from "./redux/Slices/eventsMgr";

function CardsContainer() {
  const allData = useAppSelector(
    (state) => state.eventsMgrReducer.currentEvents
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setPrevPage())}>{"<"}</button>
      {allData.map((d) => (
        <EventCard info={d} />
      ))}
      <button onClick={() => dispatch(setNextPage())}>{">"}</button>
    </div>
  );
}

export default CardsContainer;
