import { getMonthFrequency } from "../data/events";
import { select, selectAll } from "d3-selection";
import { scaleBand, scaleLinear } from "d3-scale";
import { useRef, useEffect } from "react";

function TablaTres() {
  const tablaSvg = useRef(null);
  const data = getMonthFrequency();
  const sortedData = Object.entries(data)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const margin = { top: 30, right: 20, bottom: 20, left: 100 };

  const y = 0;
  const width = 600;
  const height = 400;
  const innerHeight = height - margin.bottom - margin.top;
  const innerWidth = width - margin.left - margin.right;

  const yScale = scaleLinear().domain([0, 25]).range([0, innerWidth]);
  const xScale = scaleBand()
    .domain(sortedData.map((d) => d[0]))
    .range([0, innerHeight]);

  return (
    <div>
      <hr />
      <svg ref={tablaSvg} width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {yScale.ticks(5).map((t) => {
            return (
              <g key={t} transform={`translate(${xScale(t)},0)`}>
                <line y1={-5} y2={innerHeight + 10} stroke="black" />
                <text
                  textAnchor="middle"
                  transform="translate(0,-10)"
                  fill="black">
                  {t}
                </text>
              </g>
            );
          })}
          {xScale.domain().map((t) => {
            return (
              <g key={t} transform={`translate(-10,${yScale(t)})`}>
                <text textAnchor="end" transform="translate(0,35)" fill="black">
                  {t}
                </text>
              </g>
            );
          })}
          {sortedData.map((d) => (
            <rect
              x={0}
              y={xScale(d[0])}
              width={yScale(d[1])}
              height={xScale.bandwidth()}
            />
          ))}
        </g>
      </svg>
      <hr />
    </div>
  );
}

export default TablaTres;
