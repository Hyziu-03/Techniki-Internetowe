const x = 50.081397;
const y = 19.935256;
const zoom = 15;

function addMap(x, y, zoom) {
    const map = L.map("map").setView([x, y], zoom);
    const tile = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
    const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    
    L.tileLayer(tile, { maxZoom: 19, attribution: attribution }).addTo(map);
    
    const marker = L.marker([x, y]).addTo(map);
    const address = "ul. Doktora Twardego 6, 31-201 Kraków";
    
    marker.bindPopup(address).openPopup();
}

addMap(x, y, zoom);
