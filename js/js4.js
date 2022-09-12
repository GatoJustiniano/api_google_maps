var citymap = {
    SantaCruz: {
        center: { lat: -17.7834708, lng: -63.181895 },
        population: 3363400
    },
    LaPaz: {
        center: { lat: -16.491189, lng: -68.121332 },
        population: 3023800 
    },
    Cochabamba: {
        center: { lat: -17.394383, lng: -66.167001 },
        population: 2086900 
    },
    Sucre: {
        center: { lat: -19.035373, lng: -65.259257 },
        population: 654000 
    },
    Trinidad: {
        center: { lat: -14.832206, lng: -64.903367 },
        population: 507100  
    },
    Cobija: {
        center: { lat: -11.034366, lng: -68.781487 },
        population: 158700  
    },
    Oruro: {
        center: { lat: -17.951570, lng: -67.110389 },
        population: 548500  
    },
    Tarija: {
        center: { lat: -21.517675, lng: -64.729637 },
        population: 591800  
    },
    Potosí: {
        center: { lat: -19.570336, lng: -65.754661 },
        population: 907700  
    }
};

window.onload = function () {
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 5.5,
        center: { lat: -16.4528553, lng: -64.3472144 },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    // aquí el resto del código ...
    for (var city in citymap) {
        var cityCircle = new google.maps.Circle({
            strokeColor: '#20c997',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#5882FA',
            fillOpacity: 0.35,
            map: mapa,
            center: citymap[city].center,
            radius: Math.sqrt(citymap[city].population) * 20
        });
    }
}