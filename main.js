var cards = loadJSON("info.json");
function loadJSON(filePath) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  return JSON.parse(xmlhttp.responseText);
}
