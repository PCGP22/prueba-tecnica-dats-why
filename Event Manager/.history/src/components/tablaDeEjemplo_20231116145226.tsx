import { Select } from "@mui/material";
import eventos from "../data/events";
import { select, selectAll } from "d3-selection";
import { useRef, useEffect } from "react";

function TablaDeEjemplo() {
  const tablaSvg = useRef<SVGSVGElement | null>(null);

  //Modificadores de tabla
  const width = 100;
  const height = 10;
  useEffect(() => {
    select(tablaSvg.current).append("rect");

    selectAll("rect")
      .attr("fill", "red")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "teal");
      .attr("x", (_,i)=>{i * 100})
  }, []);

  return (
    <div>
      <svg ref={tablaSvg}>
        <rect />
        <rect />
        <rect />
      </svg>
    </div>
  );
}

export default TablaDeEjemplo;
