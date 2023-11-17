import { getMonthFrequency } from "../data/events";
import { scaleBand, scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { useRef, useEffect } from "react";

function TablaDos() {
  const tablaSvg = useRef(null);
  const data = getMonthFrequency();
  const sortedData = Object.entries(data)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const margin = { top: 30, right: 20, bottom: 20, left: 150 };

  const y = 0;
  const width = 600;
  const height = 400;
  const innerHeight = height - margin.bottom - margin.top;
  const innerWidth = width - margin.left - margin.right;

  const maxValue = max(sortedData, (d) => d[1]);
  const xScale = scaleLinear().domain([0, maxValue!]).range([0, innerWidth]);
  const yScale = scaleBand()
    .domain(sortedData.map((d) => d[0]))
    .range([0, innerHeight])
    .padding(0.2);

  return (
    <div>
      <hr />
      <svg ref={tablaSvg} width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {xScale.ticks(maxValue).map((t) => {
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
          {yScale.domain().map((t) => {
            return (
              <g key={t} transform={`translate(-10,${yScale(t)})`}>
                <text textAnchor="end" transform="translate(0,35)" fill="black">
                  {t}
                </text>
              </g>
            );
          })}
          {sortedData.map((d, i) => (
            <rect
              key={d.toString() + i}
              x={0}
              y={yScale(d[0])}
              width={xScale(d[1])}
              height={yScale.bandwidth()}
            />
          ))}
        </g>
      </svg>
      <hr />
    </div>
  );
}

export default TablaDos;
