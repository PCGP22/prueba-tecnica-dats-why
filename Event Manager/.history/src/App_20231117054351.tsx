import NavBar from "./components/NavBar";
import CircleGraphic from "./components/CircleGraphic";
import MapChart from "./components/Map";
import EventsTable from "./components/EventsTable";
import CardsContainer from "./components/CardsContainer";
import EventForm from "./components/EventForm";
import { useAppDispatch } from "./components/redux/hooks/hooks";
import { useEffect } from "react";
import { setInitialState } from "./components/redux/Slices/eventsMgr";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setInitialState());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <main id="events">
        <h3>Futuros Eventos</h3>
        <CardsContainer />
      </main>
      <section id="about">
        <h3>¿Por qué agendar con nosotros?</h3>
        <div>
          <CircleGraphic />
          <p>
            En todos nuestros eventos se ha presentado al menos un 74% de
            asistencia, sin importar su ubicación.
          </p>
        </div>
        <EventsTable />
        <figure style={{ width: "600px" }}>
          <MapChart />
        </figure>
      </section>
      <section id="form">
        <h3>Agenda con nosotros</h3>
        <EventForm />
      </section>
    </>
  );
}

export default App;
