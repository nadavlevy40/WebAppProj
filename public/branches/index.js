$(document).ready(function() {
    createMap();
});

function createMap() {
    let center = new google.maps.LatLng(31.970205,34.771923);
    let mapProp= {
        center: center,
        zoom:10,
    };
    let map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    getMarkersFromServer().then(function (cords) {
       cords.map(markerCord => {
           let position = new google.maps.LatLng(markerCord.lat,markerCord.lng);
           let marker = new google.maps.Marker({position: position});
           marker.setMap(map);
       });
    });
}

function getMarkersFromServer() {
    return new Promise(function(resolve, reject) {
        // TODO: get data from server
        let cords = [
            {lat: 32.017968, lng: 34.780577},
            {lat: 31.970240, lng: 34.771940},
            {lat: 32.073777, lng: 34.792181}
        ]
        resolve(cords);
    });
}