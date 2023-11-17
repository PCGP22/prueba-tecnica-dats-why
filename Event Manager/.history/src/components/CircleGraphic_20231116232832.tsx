import { getMonthFrequency } from "../data/events";
import { scaleBand, scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { arc } from "d3-shape";
import { useRef } from "react";
import { select } from "d3-selection";

function CircleGraphic() {
  const circleGraph = useRef(null);
  const data = 74.6;
  const CONVERSOR_TO_PI = 50;

  const dimension = 500;
  const margin = 20;
  const diameter = dimension - margin * 2;
  const arcGenerator = arc()
    .outerRadius(diameter / 2)
    .innerRadius(200)
    .startAngle(0)
    .endAngle(Math.PI * (data / CONVERSOR_TO_PI));

  const backCircle = arc()
    .outerRadius(diameter / 2)
    .innerRadius(0)
    .startAngle(0)
    .endAngle(Math.PI * 2);

  const frontCircle = arc()
    .outerRadius(diameter / 2)
    .innerRadius(0)
    .startAngle(0)
    .endAngle(Math.PI * 2);

  return (
    <svg ref={circleGraph} height={diameter} width={diameter} fill="black">
      <g>
        <path
          d={backCircle()}
          fill="black"
          transform={`translate(${diameter / 2},${diameter / 2})`}
        />
        <path
          d={arcGenerator()}
          fill="teal"
          transform={`translate(${diameter / 2},${diameter / 2})`}
        />
        <text
          fill="white"
          transform={`translate(80,250)`}
          style={{ fontSize: "5em" }}>
          {data}%
        </text>
      </g>
    </svg>
  );
}

export default CircleGraphic;
