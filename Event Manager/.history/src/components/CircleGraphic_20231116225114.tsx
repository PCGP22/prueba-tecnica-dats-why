import { getMonthFrequency } from "../data/events";
import { scaleBand, scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { useRef } from "react";

function CircleGraphic() {
  const circleGraph = useRef(null);
  const data = 74.6;

  const diameter = 600;

  return (
    <svg
      ref={circleGraph}
      height={diameter}
      width={diameter}
      fill="black"></svg>
  );
}

export default CircleGraphic;
