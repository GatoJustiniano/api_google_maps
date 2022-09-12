window.onload = function () {
    var zonaNorte = new google.maps.LatLng(-17.775520, -63.197679);
    var mapOptions = {
        center: zonaNorte,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-17.776304, -63.195106),
        map: map,
        title: 'Ubicación FICCT',
        icon: '../img/posicion1.png'
    });
    var infowindow = new google.maps.InfoWindow({
        content: '<h4>FICCT</h4><p>Facultad de Ingeniería en Ciencias de la Computación y Telecomunicaciones.</p><p>Carrera: Ingeniería Informática.</p><p>Carrera: Ingeniería en Sistemas.</p><p>Carrera: Ingeniería en Redes y Telecomunicaciones.</p><img src="../img/foto_ficct.jpg" width="300 px" height="200 px" alt="FICCT-UAGRM;">'
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}