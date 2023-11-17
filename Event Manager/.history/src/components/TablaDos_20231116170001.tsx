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

  const y = 0;
  const width = 600;
  const height = 600;

  const yScale = scaleBand()
    .domain(sortedData.map((d) => d[0]))
    .range([0, height]);

  const xScale = scaleLinear().domain([0, 25]).range([0, width]);
  return (
    <div>
      <svg ref={tablaSvg} width={width} height={height}>
        {sortedData.map((d) => (
          <rect
            x={0}
            y={yScale(d[0])}
            width={xScale(d[1])}
            height={yScale.bandwidth()}
          />
        ))}
      </svg>
    </div>
  );
}

export default TablaDos;
