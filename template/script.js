let id = "stream-tools";

function log(m){
  console.log(id+": "+m);
}

log("welcome to the TEMPLATE page !");

// Function to get URL parameters by name
function getParameterByName(name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(window.location.search);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Get the parameters from the URL
var rawCss = getParameterByName('css');

var titleParam = getParameterByName('title');
var fontSize = getParameterByName('fs');
var color = getParameterByName('color');

// Update the content with the parameters
if (titleParam) {
  $('#title').text(titleParam);
}

if (fontSize) {
  $('#title').css("font-size",fontSize + "pt");
}

if (color) {
  $('#title').css("color",color);
}


if(!fontSize &&  !titleParam && !color){
  $("#helper").show();
}

console.log(!fontSize);
