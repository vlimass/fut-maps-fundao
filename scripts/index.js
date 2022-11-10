const map = L.map('map').setView([-22.857350, -43.229753], 15);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

campos.map((campo) => {
    const marker = L.icon({
        iconUrl: `./assets/${campo.type.toLowerCase()}-${campo.availability.toLowerCase()}.svg`,
        iconSize: [30, 30],
    });

    L.marker(campo.coordinates,{icon:marker})
    .addTo(map)
    .bindPopup(`
        <b>${campo.name}</b>
        <br>
        <span>${campo.description}</span>
        <span>Tipo: ${campo.type}</span>`)
    .openPopup();
})

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`You clicked the map at ${e.latlng.toString()}`)
        .openOn(map);
}

map.on('click', onMapClick);