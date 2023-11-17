import { getMonthFrequency } from "../data/events";
import { select, selectAll } from "d3-selection";
import { useRef, useEffect } from "react";

function TablaDeEjemplo() {
  const tablaSvg = useRef<SVGSVGElement | null>(null);
  const data = getMonthFrequency();
  const sortedData = Object.keys(data).sort((a, b) => data[a] - data[b]);
  console.log(sortedData);
  return;
  const numeros = Object.values(data).sort().reverse();
  console.log(numeros);
  //Modificadores de tabla
  const width = 100;
  const height = 10;
  useEffect(() => {
    //   numeros.map(d=> .append("rect"))
    // select(tablaSvg.current).append("rect");

    selectAll("rect")
      .attr("fill", "red")
      //   .attr("width", width)
      //   .attr("width", (_, i) => numeros(i))
      .attr("height", height)
      .attr("fill", "teal")
      .attr("y", (_, i) => i * 12)
      .attr("padding", 0.4);
  }, []);

  return (
    <div>
      <svg ref={tablaSvg}>
        {numeros.map((n, i) => (
          <g key={i}>
            <rect width={n * 100} />
            <text value={} />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default TablaDeEjemplo;
