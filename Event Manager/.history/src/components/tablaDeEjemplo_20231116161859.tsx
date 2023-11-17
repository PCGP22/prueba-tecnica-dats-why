import { getMonthFrequency } from "../data/events";
import { select, selectAll } from "d3-selection";
import { scaleBand, scaleLinear } from "d3-scale";
import { useRef, useEffect } from "react";

function TablaDeEjemplo() {
  const tablaSvg = useRef<SVGSVGElement | null>(null);
  const data = getMonthFrequency();
  const sortedData = Object.entries(data).sort((a, b) => b[1] - a[1]);

  //Modificadores de tabla
  const width = 100;
  const height = 20;

  useEffect(() => {
    const scaleY = scaleBand()
      .domain(sortedData.map((d) => d[0]))
      .range([0, 25]);

    const scaleX = scaleLinear().domain([0, 100]).range([0, 25]);
    select(tablaSvg.current)
      .attr("height", width * 2)
      .attr("width", width * 2);

    selectAll("rect")
      .attr("height", height)
      .attr("fill", "teal")
      .attr("y", (_, i) => i * 12)
      .attr("padding", 1);

    selectAll("text")
      .attr("fill", "red")
      .attr("height", height / 2)
      .attr("fill", "teal")
      .attr("y", (_, i) => i * 12)
      .attr("padding", 0.4)
      .attr("text-anchor", "end");
  }, []);

  return (
    <div>
      <svg ref={tablaSvg}>
        <g transform="translate(90,20)">
          {sortedData.map((d, i) => (
            <g style={{ marginTop: "8px" }} key={i}>
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
