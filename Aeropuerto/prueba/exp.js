// JavaScript source code
function inicializar() {
    //Opciones del mapa
    var OpcionesMapa = {
        center: new google.maps.LatLng(39.5495 , -2.73188),
        mapTypeId: google.maps.MapTypeId.SATELLITE, //ROADMAP  SATELLITE HYBRID TERRAIN
        zoom: 16
    };

    var miMapa;
    //constructor
    miMapa = new google.maps.Map(document.getElementById('mapa'), OpcionesMapa);

    //Añadimos el marcador
    var Marcador = new google.maps.Marker({
        position: new google.maps.LatLng(39.5495 , -2.73188),
        map: miMapa,
        title:"Santa Barbara"
    });
}

function CargaScript() {
    var script = document.createElement('script');
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=inicializar';
    document.body.appendChild(script);
}

window.onload = CargaScript;