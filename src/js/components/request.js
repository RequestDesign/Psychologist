import $ from 'jquery';
import IMask from 'imask';

$(function () {
	function handleInputChange($input) {
		if ($input.val().trim() !== '') {
			$input.siblings('.placeholder').css('opacity', '0');
		} else {
			$input.siblings('.placeholder').css('opacity', '1');
		}
	}
	$('.input-wrapper input, .input-wrapper textarea').each(function () {
		handleInputChange($(this));
	});
	$('.input-wrapper input, .input-wrapper textarea').on('input', function () {
		handleInputChange($(this));
	});
});

$(function () {
	function resizeTextarea() {
		$(this)
			.css('height', '0px')
			.css('height', this.scrollHeight + 'px');
	}
	$('textarea').on('input', resizeTextarea);
	$(window).on('resize', function () {
		$('textarea').each(resizeTextarea);
	});
	$('textarea').each(resizeTextarea);
});

document.addEventListener('DOMContentLoaded', function () {
    const inputPhones = document.getElementsByClassName('input-phone');
    for (let i = 0; i < inputPhones.length; i++) {
        IMask(inputPhones[i], {
            mask: '+{7}(000)000-00-00',
        });
    }
});

$(function () {
	$('.request_form .btn').on('click', function (e) {
		e.preventDefault();
		let isValid = true;
		$('.request_form input').each(function () {
			if ($(this).val() === '') {
				isValid = false;
				return false;
			}
		});
		if(isValid){
			$('.modal-success').addClass('active');
		}
	});
});