import $ from 'jquery';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

$('.work_main-item__top').on('click', function () {
	$(this).find('.work_main-item__btn').toggleClass('open');
	$(this).closest('.work_main-item').find('.work_main-item__text').slideToggle();
});

const rem = function (rem) {
	if (window.innerWidth > 768) {
		return 0.005208335 * window.innerWidth * rem;
	} else {
		return (100 / 375) * (0.05 * window.innerWidth) * rem;
	}
};

$(function () {
	const curSlide = $('.education_swiper-pag .pag-cur');
	const lastSlide = $('.education_swiper-pag .pag-last');
  
	const swiperEducation = new Swiper('.education_swiper', {
	  spaceBetween: rem(1.6),
	  slidesPerView: 1,
	  slidesPerGroup: 1,
	  navigation: {
		nextEl: '.education .swiper-btn-next',
		prevEl: '.education .swiper-btn-prev',
	  },
  
	  on: {
		init: function () {
		  const totalSlides = this.slides.length;
		  const slidesPerGroup = this.params.slidesPerGroup || 1;
		  const totalGroups = Math.ceil(totalSlides / slidesPerGroup);
		  lastSlide.text(totalGroups < 10 ? `0${totalGroups}` : totalGroups);
  
		  if (this.isBeginning) {
			$(this.navigation.prevEl).hide();
		  }
		  if (this.isEnd) {
			$(this.navigation.nextEl).hide();
		  }
		},
		slideChange: function () {
		  const totalSlides = this.slides.length;
		  const slidesPerGroup = this.params.slidesPerGroup || 1;
		  const currentGroupIndex = Math.ceil((this.activeIndex + 3) / 3);
		  curSlide.text(currentGroupIndex < 10 ? `0${currentGroupIndex}` : currentGroupIndex);
  
		  if (this.isBeginning) {
			$(this.navigation.prevEl).hide();
		  } else {
			$(this.navigation.prevEl).show();
		  }
  
		  if (this.isEnd) {
			$(this.navigation.nextEl).hide();
		  } else {
			$(this.navigation.nextEl).show();
		  }
		},
	  },
	  breakpoints: {
		769: {
		  slidesPerView: 3,
		  slidesPerGroup: 3,
		  speed: 900,
		  spaceBetween: rem(2.8),
		},
	  },
	});
  });
  

Fancybox.bind("[data-fancybox='education-gallery']", {});
