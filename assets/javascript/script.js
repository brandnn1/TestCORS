

//make a city search and then take those results and pass them into 
//var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=AIzaSyCPnrEUe-GDsavDjTaLAaVR8bKZ15QOTVc&"
var queryautocom = "https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyCPnrEUe-GDsavDjTaLAaVR8bKZ15QOTVc&offset=3&input=Seattle";

$.ajax({
  crossOrigin: true,
  url: queryautocom,
  method: "GET",
  headers: {
    'Access-Control-Allow-Credentials' : true,
    'Access-Control-Allow-Origin':'*'
  }
 }).then(function(responseautocom) {

  autocomoptions = responseautocom.results;
  console.log(autocomoptions);
 });




// $.ajax({
//     crossOrigin: true,
//     url: queryURL,
//     method: "GET"
//    }).then(function(response) {

//    options = response.results;
//     console.log(options);
//    });



//Google Map Call 
var map;
var latitude = 47.6062
var long = -122.3321



function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: long},
    zoom: 10  
  });
}

