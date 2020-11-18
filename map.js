//making a map and tiles
//L de leaflet
var mymap = L.map('mapid').setView([41.38724, 2.16993], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    //token
    accessToken: 'pk.eyJ1IjoiYW5uYWNtIiwiYSI6ImNraGtpcWhhMDFtOWkyc3FxOXZudTU5ZXYifQ.poCHboDWqDcI4858pArAxA'
}).addTo(mymap);

//making a marker con su popup
marker = L.marker([41.38685, 2.16611]).addTo(mymap);
marker.bindPopup("<b>Restaurant Centfocs</b><br>Restaurante mediterráneo</br>Carrer Balmes,16 08007 Barcelona").openPopup();