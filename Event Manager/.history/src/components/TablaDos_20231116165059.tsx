import { getMonthFrequency } from "../data/events";
import { select, selectAll } from "d3-selection";
import { scaleBand, scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { useRef, useEffect } from "react";

function TablaDos() {
  const tablaSvg = useRef(null);
  return (
    <div>
      <svg ref={tablaSvg}></svg>
    </div>
  );
}

export default TablaDos;
