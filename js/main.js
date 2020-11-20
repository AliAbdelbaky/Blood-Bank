//slider
$(document).ready(function () {
    'use strict';
    $('.carousel').carousel({
        autoplay: true,
        loop: true
    });
});
//slider02




//map
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}

//like function
$(document).ready(function () {
    'use strict';
    $('.like i').on('click', function () {
        $(this).toggleClass('far fa-heart fas fa-heart red');
    });
});