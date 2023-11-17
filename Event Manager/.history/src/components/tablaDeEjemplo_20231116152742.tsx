import { getMonthFrequency } from "../data/events";
import { select, selectAll } from "d3-selection";
import { useRef, useEffect } from "react";

function TablaDeEjemplo() {
  const tablaSvg = useRef<SVGSVGElement | null>(null);
  const data = getMonthFrequency();
  const sortedData = Object.entries(data).sort((a, b) => b[1] - a[1]);

  //Modificadores de tabla
  const width = 100;
  const height = 20;
  useEffect(() => {
    select(tablaSvg.current)
      .attr("height", width * 2)
      .attr("width", width * 2);

    selectAll("rect")
      //   .attr("fill", "red")
      //   .attr("width", width)
      //   .attr("width", (_, i) => sortedData(i))
      .attr("height", height)
      .attr("fill", "teal")
      .attr("y", (_, i) => i * 12)
      .attr("padding", 1);

    selectAll("text")
      .attr("fill", "red")
      //   .attr("width", width)
      //   .attr("width", (_, i) => sortedData(i))
      .attr("height", height / 2)
      .attr("fill", "teal")
      .attr("y", (_, i) => i * 12)
      .attr("transform", "translate(0,100)")
      .attr("padding", 0.4)
      .attr("text-anchor", "end");
  }, []);

  return (
    <div>
      <svg ref={tablaSvg}>
        <g transform="translate(90,20)">
          {sortedData.map((d, i) => (
            <g key={i}>
              <rect width={d[1] * 10} />
              <text style={{ fontSize: "16px" }}>{d[0]}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default TablaDeEjemplo;
