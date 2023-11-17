import NavBar from "./components/NavBar";
import TablaDos from "./components/EventsTable";
import CardsContainer from "./components/CardsContainer";
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

        <TablaDos />
      </section>
      <section id="form">
        <h2>Agenda con nosotros</h2>
      </section>
    </>
  );
}

export default App;
