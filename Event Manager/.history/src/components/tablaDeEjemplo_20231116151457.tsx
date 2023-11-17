import { getMonthFrequency } from "../data/events";
import { select, selectAll } from "d3-selection";
import { useRef, useEffect } from "react";

function TablaDeEjemplo() {
  const tablaSvg = useRef<SVGSVGElement | null>(null);
  const data = getMonthFrequency();
  const sortedData = Object.entries(data).sort((a, b) => b[1] - a[1]);

  //Modificadores de tabla
  const width = 100;
  const height = 10;
  useEffect(() => {
    selectAll("rect")
      //   .attr("fill", "red")
      //   .attr("width", width)
      //   .attr("width", (_, i) => sortedData(i))
      .attr("height", height)
      .attr("fill", "teal")
      .attr("y", (_, i) => i * 12)
      .attr("padding", 0.4);

    selectAll("text")
      .attr("fill", "red")
      //   .attr("width", width)
      //   .attr("width", (_, i) => sortedData(i))
      .attr("height", height)
      .attr("fill", "teal")
      .attr("y", (_, i) => i * 12)
      .attr("padding", 0.4);
  }, []);

  return (
    <div>
      <svg ref={tablaSvg}>
        {sortedData.map((d, i) => (
          <g key={i}>
            <rect width={d[1] * 100} />
            <text stroke="20">{d[0]}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default TablaDeEjemplo;
