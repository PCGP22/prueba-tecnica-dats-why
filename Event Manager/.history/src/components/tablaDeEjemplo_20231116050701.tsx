import eventos from "../data/events";
import * as d3 from "d3";

function TablaDeEjemplo() {
  //   const data = eventos;
  //   const margin = 50;
  //   const width = (100 % -margin) * 2;
  //   const height = (100 % -margin) * 2;
  //   const yScale = d3
  //     .scaleLinear()
  //     .range([height, 0])
  //     .domain([0, d3.max(data, (d: any) => d.value)]);
  //   const xScale = d3
  //     .scaleBand()
  //     .range([0, width])
  //     .padding(0.4)
  //     .domain(data.map((d, i) => Object.keys(data)[i]));

  const svg = d3.select("svg"),
    margin = 200,
    width = svg.attr("width") - margin,
    height = svg.attr("height") - margin;

  const xScale = d3.scaleBand().range([0, width]).padding(0.4),
    yScale = d3.scaleLinear().range([height, 0]);

  const g = svg
    .append("g")
    .attr("transform", "translate(" + 100 + "," + 100 + ")");

  d3.csv("XYZ.csv", function (error, data) {
    if (error) {
      throw error;
    }
    data = eventos;

    xScale.domain(
      data.map(function (d) {
        return d.year;
      })
    );
    yScale.domain([
      0,
      d3.max(data, function (d) {
        return d.value;
      }),
    ]);

    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));

    g.append("g")
      .call(
        d3
          .axisLeft(yScale)
          .tickFormat(function (d) {
            return "$" + d;
          })
          .ticks(10)
      )
      .append("text")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("value");
  })();

  return (
    <div>
      <svg>
        {/* <g transform="translate(100, 100)">
          <g transform={`translate(0, ${height})`}>{d3.axisBottom(xScale)}</g>
          <g>
            {d3.axisLeft(yScale)}
            <text y={6} dy={"0.71em"} textAnchor="end" values="value" />
          </g>
        </g> */}
      </svg>
    </div>
  );
}

export default TablaDeEjemplo;
