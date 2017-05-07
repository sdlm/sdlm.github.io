$( document ).ready(function() {

    function initMapReg() {

        var location = new google.maps.LatLng(55.6557947, 37.6569157);

        var mapCanvas = document.getElementById('map-reg');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: location,
            map: map,
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

    }

    function initMapEve() {

        var location = new google.maps.LatLng(55.6025807, 38.4185067);

        var mapCanvas = document.getElementById('map-evening');
        var mapOptions = {
            center: location,
            zoom: 14,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: location,
            map: map,
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

    }

    google.maps.event.addDomListener(window, 'load', initMapReg);
    google.maps.event.addDomListener(window, 'load', initMapEve);

});
