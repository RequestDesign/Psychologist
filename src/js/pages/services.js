import $ from "jquery";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const rem = function (rem) {
	if (window.innerWidth > 768) {
		return 0.005208335 * window.innerWidth * rem;
	} else {
		return (100 / 375) * (0.05 * window.innerWidth) * rem;
	}
};

$('.btn__show-more').on('click', function(){
    $(this).siblings('.swiper-wrapper').find('.swiper-slide.hidden').each((_, slide) => {
        $(slide).slideDown().removeClass('hidden');
    });
});

$(function() {
    if ($(window).width() < 769) {
        const swiperServices = new Swiper('.services_block__items.swiper', {
            slidesPerView: 1,
            spaceBetween: rem(1.6),
        });
    }
});
