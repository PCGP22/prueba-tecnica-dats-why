import { getMonthFrequency } from "../data/events";
import { select, selectAll } from "d3-selection";
import { scaleBand, scaleLinear } from "d3-scale";
import { useRef, useEffect } from "react";

function TablaDeEjemplo() {
  const tablaSvg = useRef<SVGSVGElement | null>(null);
  const data = getMonthFrequency();
  const sortedData = Object.entries(data).sort((a, b) => b[1] - a[1]);

  //Modificadores de tabla
  const width = 600;
  const height = 600;

  useEffect(() => {
    const scaleY = scaleBand()
      .domain(sortedData.map((d) => d[0]))
      .range([0, 150])
      .paddingInner(0.4)
      .paddingOuter(0.7);

    const maxValue = max(sortedData, (d) => d[1]);
    const scaleX = scaleLinear().domain([0, maxValue]!).range([0, width]);

    select(tablaSvg.current).attr("height", height).attr("width", width);

    selectAll("rect")
      .data(sortedData)
      .attr("height", 20)
      .attr("fill", "teal")
      .attr("y", (d) => scaleY(d[0])!)
      .attr("padding", 1);

    selectAll("text")
      .attr("fill", "red")
      .attr("height", 20)
      .data(sortedData)
      .attr("fill", "teal")
      .attr("y", (d) => scaleY(d[0])!)
      .attr("padding", 0.4)
      .attr("text-anchor", "end");
  }, [sortedData]);

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
