var map = L.map('mapid').setView([-7.361569, 109.904803], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var folkloreLocations = [
    {lat: -7.268013, lon: 109.925684, name: 'Legenda Telaga Menjer', description: ''},
    {lat: -7.213256, lon: 109.915319, name: 'Legenda Telaga Warna', description: ''},
    {lat: -7.384994, lon: 110.072479, name: 'Legenda Gunung Sumbing', description: ''},
    {lat: -7.340953, lon: 109.958244, name: 'Rambut Gimbal', description: ''},
    {lat: -7.215390, lon: 109.917105, name: 'Legenda Telaga Pengilon', description: ''},
    {lat: -7.304360, lon: 109.993683, name: 'Legenda Gunung Sindoro', description: ''}
];

folkloreLocations.forEach(function(loc) {
    var popupContent = '<b>' + loc.name + '</b><br>' + loc.description + '<br><a href="deskripsi_' + loc.name.toLowerCase().replace(/ /g, '_') + '.html">Baca selengkapnya</a>';
    L.marker([loc.lat, loc.lon]).addTo(map)
        .bindPopup(popupContent);
});
