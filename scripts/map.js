<html>
<head>
<title>Lynchings in Shelby County</title>

<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
<script src='https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.js'></script>
<link href='https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.css' rel='stylesheet' />
<style>
  body { margin:0; padding:0; }
  #map { position:absolute; top:0; bottom:0; width:100%; }
</style>


</head>
<body>
<style>
.leaflet-popup-content img {
  max-width:100%;
  }
</style>
<div id='map'></div>

<script>
L.mapbox.accessToken = 'pk.eyJ1IjoiYW50aG9ueWNzaXJhY3VzYSIsImEiOiJjaWdudWVocG4wMGJpbmtrb2ZkZDNpczF1In0.m3FSJwiHgwy1pfcsP2Orbw';
	var map = L.mapbox.map('map', 'anthonycsiracusa.p31dhnah').setView([35.14, -89.98], 14);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geoJson = [{
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-89.85, 35.12]},
    "properties": {
        "image": "http://projects.library.vanderbilt.edu/civil/files/original/d710fa538b6d805749c2cec3068126e5.png",
        "url": "http://projects.library.vanderbilt.edu/civil/items/show/3",
        "marker-color": "#604020",
        "marker-size": "medium",
        "city": "Site of Ell Persons Lynching."
    }
}, {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-90.05, 35.14]},
    "properties": {
        "image": "http://projects.library.vanderbilt.edu/civil/files/original/16ff294a4e095b4cb53c32098f3e5a0b.png",
        "url": "http://projects.library.vanderbilt.edu/civil/items/show/3",
        "marker-color": "#604020",
        "city": "Beale Street - Where Ell Persons' head was thrown into the street."
    }
}, {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-90.054807, 35.140303]},
    "properties": {
        "image": "http://projects.library.vanderbilt.edu/civil/files/original/0ff434cb0fa7d1ab5a4ae2cdd2845e1d.png",
        "url": "http://projects.library.vanderbilt.edu/civil/items/show/3",
        "marker-color": "#604020",
        "city": "Original Location of Shelby County Jail"
    }
}];

// Add custom popups to each using our custom feature properties
myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    // Create custom popup content
    var popupContent =  '<a target="_blank" class="popup" href="' + feature.properties.url + '">' +
                            '<img src="' + feature.properties.image + '" />' +
                            feature.properties.city +
                        '</a>';

    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent,{
        closeButton: false,
        minWidth: 320
    });
});

// Add features to the map
layer.setGeoJSON(result);
</script>
</body>
</html>
