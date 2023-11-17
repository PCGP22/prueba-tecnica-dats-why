import NavBar from "./components/NavBar";
import TablaDos from "./components/TablaEventosMes";

function App() {
  return (
    <>
      <NavBar />
      <main id="events">
        <h3>Futuros Eventos</h3>
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
