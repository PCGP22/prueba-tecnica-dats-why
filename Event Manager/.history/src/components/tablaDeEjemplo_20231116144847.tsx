import eventos from "../data/events";
import { select } from "d3-selection";
import { useRef, useEffect } from "react";

function TablaDeEjemplo() {
  const tablaSvg = useRef<SVGSVGElement | null>(null);

  //Modificadores de tabla
  const width = 100;
  const height = 100;
  useEffect(() => {
    select(tablaSvg.current)
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "teal");
  }, []);

  return (
    <div>
      <svg ref={tablaSvg} />
    </div>
  );
}

export default TablaDeEjemplo;
