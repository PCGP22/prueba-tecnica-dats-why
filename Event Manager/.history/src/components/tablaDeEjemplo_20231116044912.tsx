import eventos from "../data/events";
import * as d3 from "d3";

function tablaDeEjemplo() {
  const data = eventos;
  const margin = 50;
  const width = (100 % -margin) * 2;
  const height = (100 % -margin) * 2;
  const yScale = d3.scaleLinear().range([height, 0]).domain([0]);
  const xScale = d3.scaleBand().range([0, width]).padding(0.4);

  return (
    <div>
      <svg>
        <g transform="translate(100, 100)"></g>
      </svg>
    </div>
  );
}

export default tablaDeEjemplo;
