import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// import eventos from "../data/events";

//Courtsy of https://github.com/leenoah1
const geoUrl =
  "https://gist.githubusercontent.com/leenoah1/535b386ec5f5abdb2142258af395c388/raw/a045778d28609abc036f95702d6a44045ae7ca99/geo-data.json";

const coordinates = [
  { name: "Cancún", coordinates: [-30.44619803628396, -94.91243042236] },
  { name: "Tepito", coordinates: [17.44619803628396, -97.91243042236] },
  {
    name: "Ensenada",
    coordinates: [31.85113801176917, -116.61888926424743],
  },
];

function MapChart() {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [100, -24, 0],
        scale: 1500, //1500
      }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#6fbf9a"
              stroke="white"
            />
          ))
        }
      </Geographies>
      {coordinates.map((d) => (
        <Marker key={d.name} coordinates={d.coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(330, -2340)">
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={50}
            x={20}
            transform="translate(330, -2340)"
            style={{
              fontFamily: "system-ui",
              fill: "black",
              fontWeight: "bold",
            }}>
            {d.name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}

export default MapChart;
