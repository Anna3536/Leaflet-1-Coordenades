//making a map and tiles
//L de leaflet
var mymap = L.map('mapid').setView([41.38724, 2.16993], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //zoom maximo de 18
    zoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    //token
    accessToken: 'pk.eyJ1IjoiYW5uYWNtIiwiYSI6ImNraGtpcWhhMDFtOWkyc3FxOXZudTU5ZXYifQ.poCHboDWqDcI4858pArAxA'
}).addTo(mymap);



var popup = L.popup();
var marker = ([41.38724, 2.16993]);

function onMapClick(e) {
    mymap.removeLayer(marker);
    marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
    popup
        .setLatLng(e.latlng)
        .setContent(`<div>Mis coordenadas son:</div><div><strong>Lat:</strong> ${e.latlng.lat.toString()} <strong>Lng:</strong> ${e.latlng.lng.toString()}</div>`)
        .openOn(mymap);

    mymap.addLayer(marker);


}

mymap.on('click', onMapClick);