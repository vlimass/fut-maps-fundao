// import { campos } from "./campos";

const map = L.map('map').setView([-22.857350, -43.229753], 15);

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

    const markers = {'Campo': './bola.png', 'Quadra': './quadra.svg'};

    campos.map((campo) => {

        const marker = L.icon({
            iconUrl: markers[campo.type],
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

	// const cobalGrande = L.marker([-22.86750880445259, -43.21829123227059])
    // .addTo(map)
    // .bindPopup('<b>COBAL</b><br />Um campin pra vc sair e já sair pro bar.')
    // .openPopup();

    // const cobalPequeno = L.marker([-22.867392357401517, -43.21910809165156])
    // .addTo(map)
    // .bindPopup('<strong>COBAL PEQUENO</strong><br />Um campin pra vc jogar e já sair pro bar.')
    // .openPopup();

    // const coppeGrande = L.marker([-22.863866, -43.229407])
    // .addTo(map)
    // .bindPopup('<b>COBAL PEQUENO</b><br />Um campin pra vc sair e já sair pro bar.')
    // .openPopup();

    // const coppe = L.marker([-22.863866, -43.229407])
    // .addTo(map)
    // .bindPopup('<b>COBAL PEQUENO</b><br />Um campin pra vc sair e já sair pro bar.')
    // .openPopup();


	// const circle = L.circle([-22.867392357401517, -43.21910809165156], {
	// 	color: 'red',
	// 	fillColor: '#f03',
	// 	fillOpacity: 0.5,
	// 	radius: 500
	// }).addTo(map).bindPopup('I am a circle.');

	// const polygon = L.polygon([
	// 	[-22.867106244423944, -43.21831174922397],
	// 	[-22.86736322576325, -43.218737847612005],
	// 	[-22.868057072951252, -43.21822188120032],
	// 	[ -22.867802948260753, -43.217775639979415]
	// ]).addTo(map).bindPopup('<strong>COBAL GRANDE</strong><br>Um campin pra vc jogar e já sair pro bar');


	// const popup = L.popup()
	// 	.setLatLng([51.513, -0.09])
	// 	.setContent('I am a standalone popup.')
	// 	.openOn(map);

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent(`You clicked the map at ${e.latlng.toString()}`)
			.openOn(map);
	}

	map.on('click', onMapClick);