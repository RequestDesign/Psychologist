import $ from 'jquery';

function closeModal() {
	$('.modal').removeClass('active');
	$('body').removeClass('lock');
}

$('[data-modal="close-modal"]').on('click', () => {
	closeModal();
});

$('[data-modal="request"]').on('click', () => {
	$('.modal-request').addClass('active');
	$('body').addClass('lock');
});

$('[data-modal="success"]').on('click', () => {
	$('.modal-success').addClass('active');
	$('body').addClass('lock');
});

$('.modal-back').on('click', function () {
	closeModal();
});

$(function () {
	$('.btn').on('click', function (e) {
		e.preventDefault();
		let isValid = true;
		$('.modal_form__inputs input[type="text"]').each(function () {
			if ($(this).val() === '') {
				isValid = false;
				return false;
			}
		});
		if (!isValid || !$('.modal_form__checkbox input[type="checkbox"]').is(':checked')) {
			return;
		}
		$('.modal-success').addClass('active');
		$('.modal-request').removeClass('active');
	});
});
