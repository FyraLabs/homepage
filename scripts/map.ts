import DottedMap from "@lleyton/dotted-map";

const pins = [
  {
    lat: 34.05,
    lng: -118.25,
    svgOptions: { color: "#ec4899", radius: 0.6 },
  },
  {
    lat: 44.94417,
    lng: -93.09361,
    svgOptions: { color: "#a855f7", radius: 0.6 },
  },
  {
    lat: -23.55,
    lng: -46.633,
    svgOptions: { color: "#a855f7", radius: 0.6 },
  },
  {
    lat: 13.7525,
    lng: 100.49417,
    svgOptions: { color: "#a855f7", radius: 0.6 },
  },
  {
    lat: 22.3193,
    lng: 114.1694,
    svgOptions: { color: "#a855f7", radius: 0.6 },
  },
  {
    lat: 51.1657,
    lng: 10.4515,
    svgOptions: { color: "#a855f7", radius: 0.6 },
  },
  {
    lat: 6.2088,
    lng: 106.8456,
    svgOptions: { color: "#a855f7", radius: 0.6 },
  },
  {
    lat: 47.5162,
    lng: 14.5501,
    svgOptions: { color: "#a855f7", radius: 0.6 },
  },
];

const map = new DottedMap({
  height: 40,
  grid: "vertical",
});
pins.forEach((pin) => map.addPin(pin));

console.log(
  map.getSVG({
    radius: 0.22,
    color: "#3f3f46",
    shape: "circle",
  }),
);
