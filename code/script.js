//create variable to hold the map element, give initial settings to map
var map = L.map("map", {
  center: [38.1, -98],
  zoom: 5,
});

//create basemap layer
var osm = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
  }
);

//add to map
osm.addTo(map);

//create data variable
var data = [
  {
    coord: [40.308746567390294, -105.08229135535235],
    desc: "Berthoud, CO",
    url: "https://www.patrickengineering.com/locations/Berthoud",
  },
  {
    coord: [39.74102996214569, -104.97940776843281],
    desc: "Denver, CO",
    url: "https://www.patrickengineering.com/locations/Denver",
  },
  {
    coord: [30.138432902431312, -81.47832258872786],
    desc: "Jacksonville, FL",
    url: "https://www.patrickengineering.com/locations/Jacksonville",
  },
  {
    coord: [41.879448988274895, -87.6315117046291],
    desc: "Chicago, IL",
    url: "https://www.patrickengineering.com/locations/Chicago",
  },
  {
    coord: [41.8007476149432, -88.07480791524236],
    desc: "Lisle, IL",
    url: "https://www.patrickengineering.com/locations/Lisle",
  },
  {
    coord: [39.77999819036976, -89.64469580209537],
    desc: "Springfield, IL",
    url: "https://www.patrickengineering.com/locations/Springfield",
  },
  {
    coord: [38.04604579443191, -84.50244254581874],
    desc: "Lexington, KY",
    url: "https://www.patrickengineering.com/locations/Lexington",
  },
  {
    coord: [41.472330129058626, -87.06337336083872],
    desc: "Valparaiso, IN",
    url: "https://www.patrickengineering.com/locations/Valparaiso",
  },
  {
    coord: [39.77172821881897, -86.15817364592962],
    desc: "Indianapolis, IN",
    url: "https://www.patrickengineering.com/locations/Indianapolis",
  },
  {
    coord: [41.26104429429596, -95.8669285068911],
    desc: "Council Bluffs, IA",
    url: "https://www.patrickengineering.com/locations/Council-Bluffs",
  },
  {
    coord: [42.36045708792693, -71.05470762310003],
    desc: "Boston, MA",
    url: "https://www.patrickengineering.com/locations/Boston",
  },
  {
    coord: [39.96068992182012, -82.99568108206131],
    desc: "Columbus, OH",
    url: "https://www.patrickengineering.com/locations/Columbus",
  },
  {
    coord: [41.499389586400504, -81.68319302542062],
    desc: "Cleveland, OH",
    url: "https://www.patrickengineering.com/locations/Cleveland",
  },
  {
    coord: [33.999310722137295, -81.04237043257584],
    desc: "Columbia, SC",
    url: "https://www.patrickengineering.com/locations/Columbia",
  },
  {
    coord: [44.51263315662531, -88.01247710457417],
    desc: "Green Bay, WI",
    url: "https://www.patrickengineering.com/locations/Green-Bay",
  },
  {
    coord: [43.060874543136336, -88.1066145780849],
    desc: "Brookfield, WI",
    url: "https://www.patrickengineering.com/locations/Brookfield",
  },
];

var logo = L.icon({
  iconUrl:
    "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/8ec294c2f144d43bf5d7ec5f4f96d0c9",
  iconSize: [20, 20],
  iconAnchor: [10, 20],
  tooltipAnchor: [0, -20],
});

for (var i = 0; i < data.length; i++) {
  L.marker(data[i].coord, {
    icon: logo,
    alt: "Patrick Engineering logo",
    title: "Click for more info",
    riseOnHover: true,
    myUrl: data[i].url,
  })
    .addTo(map)
    .bindTooltip("<h3>" + data[i].desc + "</h3>", { direction: "top" })
    .on("click", function (evt) {
      window.open(evt.target.options.myUrl, "_blank");
    });
}

/*
//add a state borders pane
map.createPane("bordersPane");
map.getPane("bordersPane").style.zIndex = 600;

//the style for stateborders
function borders(feature) {
  return {
    weight: 2.5,
    opacity: 1,
    fillOpacity: 0,
    interactive: false,
    color: "#272727",
  };
}

//add states geoJSON
geojson = L.geoJson
  .ajax("data/us-states.geojson", {
    style: borders,
    pane: "bordersPane",
  })
  .addTo(map);
*/
