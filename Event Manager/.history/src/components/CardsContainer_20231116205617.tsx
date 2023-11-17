import EventCard from "./EventCard";
import { useAppSelector } from "./redux/hooks/hooks";

function CardsContainer() {
  const allData = useAppSelector(
    (state) => state.eventsMgrReducer.currentEvents
  );

  return (
    <div>
      {allData.map((d) => (
        <EventCard info={d} />
      ))}
    </div>
  );
}

export default CardsContainer;
