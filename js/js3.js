var map;
function initialize() {
    var mapOptions = {
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('mapa'),
        mapOptions);
    // Intenta utilizar geolocalización a partir de HTML5
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var posicionUsuario = new
                google.maps.LatLng(position.coords.latitude, position.coords.longitude)
                ;
            var marker = new google.maps.Marker({
                position: posicionUsuario,
                map: map,
                title: 'Geolocalización HTML5',
            });
            var infowindow = new google.maps.InfoWindow({
                content: 'Ubicación obtenida a partir de HTML5.'
            });
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
            map.setCenter(posicionUsuario);
        }, function () {
            handleNoGeolocation(true);
        });
    } else {
        // el navegador no es compatible o no lo permite
        handleNoGeolocation(false);
    }
}
function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        var content = 'Error: El servicio de geolocalización ha fallado.';
    } else {
        var content = 'Error: Tu navegador no soporta el servicio de geolocalización.';
    }
    var options = {
        map: map,
        position: new google.maps.LatLng(0, 0),
        content: content
    };
    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}
google.maps.event.addDomListener(window, 'load', initialize);