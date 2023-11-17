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
  { name: "Cancún", coordinates: [81.1761, -86.8076] },
  { name: "Tepito", coordinates: [19.4449, -99.1231] },
  {
    name: "Ensenada",
    coordinates: [31.8511, -116.6188],
  },
];

function MapChart() {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [100, -5, 0],
        scale: 300,
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
            transform="translate(0, -200)">
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={0}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}>
            {d.name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}

export default MapChart;
