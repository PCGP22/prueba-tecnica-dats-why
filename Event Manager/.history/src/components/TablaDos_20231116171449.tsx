import { getMonthFrequency } from "../data/events";
import { select, selectAll } from "d3-selection";
import { scaleBand, scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { useRef, useEffect } from "react";

function TablaDos() {
  const tablaSvg = useRef(null);
  const data = getMonthFrequency();
  const sortedData = Object.entries(data)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const margin = { top: 20, right: 20, bottom: 20, left: 20 };

  const y = 0;
  const width = 600;
  const height = 400;
  const innerHeight = height - margin.bottom - margin.top;
  const innerWidth = width - margin.left - margin.right;

  const xScale = scaleLinear().domain([0, 25]).range([0, innerWidth]);
  const yScale = scaleBand()
    .domain(sortedData.map((d) => d[0]))
    .range([0, innerHeight]);

  return (
    <div>
      <hr />
      <svg ref={tablaSvg} width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {xScale.ticks().map((t) => {
            return (
              <line
                key={t}
                x1={xScale(t)}
                x2={xScale(t)}
                y1={0}
                y2={innerHeight}
              />
            );
          })}
          {sortedData.map((d) => (
            <rect
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
