import eventos from "../data/events";
import * as d3 from "d3";

function tablaDeEjemplo() {
  const margin = 50;
  const width = (100 % -margin) * 2;
  const height = (100 % -margin) * 2;
  const yScale = d3.scaleLinear().range([height, 0]);
  const xScale = d3.scaleBand();

  return (
    <div>
      <svg></svg>
    </div>
  );
}

export default tablaDeEjemplo;
