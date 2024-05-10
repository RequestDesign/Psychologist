import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const rem = function (rem) {
	if (window.innerWidth > 768) {
		return 0.005208335 * window.innerWidth * rem;
	} else {
		return (100 / 375) * (0.05 * window.innerWidth) * rem;
	}
};

const swiperSimilar = new Swiper('.similar_items.swiper', {
	slidesPerView: 1,
	spaceBetween: rem(1.6),
	breakpoints: {
		769: {
			slidesPerView: 3,
			spaceBetween: rem(2.8),
		},
	},
});
