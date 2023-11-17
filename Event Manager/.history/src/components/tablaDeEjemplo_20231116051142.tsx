import eventos from "../data/events";
import * as d3 from "d3";
import { useRef } from "react";

function TablaDeEjemplo() {
  const data = eventos;
  const margin = 50;
  const width = (100 % -margin) * 2;
  const height = (100 % -margin) * 2;
  const yScale = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(data, (d: any) => d.value)]);
  const xScale = d3
    .scaleBand()
    .range([0, width])
    .padding(0.4)
    .domain(data.map((d, i) => Object.keys(data)[i]));

  const content1 = d3.axisBottom(xScale);
  return (
    <div>
      <svg>
        <g transform="translate(100, 100)">
          <g transform={`translate(0, ${height})`}>{content1}</g>
          <g>
            {d3.axisLeft(yScale)}
            <text y={6} dy={"0.71em"} textAnchor="end" values="value" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default TablaDeEjemplo;
