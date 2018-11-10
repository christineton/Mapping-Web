// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);
// City markers

// Add code to create a marker for each city below and add it to the map

// newyork;
L.marker([40.71, -74], {
  draggable: true,
  title: "New York"
}).addTo(myMap);
// chicago;
L.marker([41.87, -87.62], {
  draggable: true,
  title: "Chicago"
}).addTo(myMap);
// houston;
L.marker([29.76, -95.36], {
  draggable: true,
  title: "Houston"
}).addTo(myMap);
// la;
var marker_la = L.marker([34.05, -118.24], {
  draggable: true,
  title: "Los Angeles"
}).addTo(myMap.bindPopup("LA How are you?!?");
// omaha;
L.marker([41.25, -95.93], {
  draggable: true,
  title: "Omaha"
}).addTo(myMap);


marker_la.bindPopup("LA How are you?!?");
