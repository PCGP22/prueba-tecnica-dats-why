import { getMonthFrequency } from "../data/events";
import { scaleBand, scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { arc } from "d3-shape";
import { useRef } from "react";
import { select } from "d3-selection";

function CircleGraphic() {
  const circleGraph = useRef(null);
  const data = 74.6;

  const diameter = 600;
  const margin = 20;
  const arcGenerator = arc()
    .outerRadius(diameter / 2)
    .innerRadius(40)
    .startAngle(0)
    .endAngle(Math.PI * 2);

  //   const graph = select("svg")
  //     .append("path")
  //     .attr("transform", "translate(150,120)")
  //     .attr("d", arcGenerator())
  //     .attr("fill", "teal");
  return (
    <svg ref={circleGraph} height={diameter} width={diameter} fill="black">
      <g>
        <path d={arcGenerator()} fill="teal" transform="translate(300,300)" />
      </g>
    </svg>
  );
}

export default CircleGraphic;
