import $ from 'jquery';

$(function () {
	if ($('.map-wrapper').length) {
		ymaps.ready(init);

		let main = [55.749460306572665, 37.54004788095094];

		function init() {
			let map = new ymaps.Map('map', {
				center: [55.749460306572665, 37.54004788095094],
				zoom: 14,
			});

			map.controls.remove('geolocationControl');
			map.controls.remove('searchControl');
			map.controls.remove('trafficControl');
			map.controls.remove('typeSelector');
			map.controls.remove('fullscreenControl');
			map.controls.remove('zoomControl');
			map.controls.remove('rulerControl');

			let placemarkMain = new ymaps.Placemark(
				main,
				{},
				{
					iconLayout: 'default#image',
					iconImageHref: './../../assets/images/icons/map-pin.svg',
					iconImageSize: [30, 44],
					iconImageOffset: [-10, -30],
				}
			);

			map.geoObjects.add(placemarkMain);
		}
	}
});
