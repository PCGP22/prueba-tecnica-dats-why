import NavBar from "./components/NavBar";
import TablaDos from "./components/TablaEventosMes";

function App() {
  return (
    <>
      <NavBar />
      <main id="events"></main>
      <section id="about">
        <TablaDos />
      </section>
      <section id="form"></section>
    </>
  );
}

export default App;
