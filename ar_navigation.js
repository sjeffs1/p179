var coordinates = {}

$(document).ready(function() {
    get_coordinates()
})

function get_coordinates() {
    var searchParams = new URLSearchParams(window.location.search)
    if(searchParams.has("source")&&searchParams.has("destination")) {
        var source = searchParams.get("source")
        var destintaion = searchParams.get("destination")
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]

        coordinates.destintaion_lat = destintaion.split(";")[0]
        coordinates.destintaion_lon = destintaion.split(";")[1]
    }else {
        alert("co-ordinates not selected")
        window.history.back()
    }

    map.addControl(
        new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
            }).on('result', function (e) {
                destination = e.result.center
        })       
    );
}

$(function() {
    $("#navigate-button").click(function () {
        window.location.href = `ar_weather.html?source=${latitude}; ${longitude}&destination=${destination [1]};${destination[0]}`
    })
})
