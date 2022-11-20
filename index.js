// Initialize and add the map
var myStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];

function initMap() {
  // The location of Uluru
  const uluru = { lat: 43.4509118, lng: -80.5157666 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    opacity: 0.5,
    zoom: 16,
    styles: myStyles,
    center: uluru,
    disableDefaultUI: true,
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    gestureHandling: "none",
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: {
      url: "file:///Users/hanna/Desktop/Vector.png",
    },
  });
}

window.initMap = initMap;
