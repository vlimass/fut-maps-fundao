const map = L.map('map').setView([-22.857350, -43.229753], 15);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

fields.map((field) => {
    const marker = L.icon({
        iconUrl: `./assets/${field.type.toLowerCase()}-${field.availability.toLowerCase()}.svg`,
        iconSize: [30, 30],
    });

    L.marker(field.coordinates,{icon:marker})
    .addTo(map)
    .bindPopup(
        `
        <b>${field.name}</b><br>
        <span>Tipo: ${field.type}</span><br>
        <span>Disponibilidade: ${field.availability}</span><br>
        <span>Elenco: ${field.numberOfPlayers} jogadores</span><br>
        <span>${field.description}</span>
        `
    )
    .openPopup();
})

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`You clicked the map at ${e.latlng.toString()}`)
        .openOn(map);
}

map.on('click', onMapClick);

// Modal de Legenda
function handleOpenCaptions() {

}