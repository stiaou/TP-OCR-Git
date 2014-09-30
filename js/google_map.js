var theMap;
function initializeMap() {
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(48.853409,2.3488)
	};
	theMap = new google.maps.Map(document.getElementById('map-canvas'),
  	mapOptions);
}

google.maps.event.addDomListener(window, 'load', initializeMap);