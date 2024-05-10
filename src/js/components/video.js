import $ from 'jquery';

$('.video-publictaion, .btn__play').on('click', function () {
	let $this = $(this);
	let $video = $this.closest('.article-card__video').find('video');
	let $button = $this.closest('.article-card__video').find('.btn__play');

	if ($video.length > 0) {
		if ($video[0].paused) {
			$video[0].play();
			$button.addClass('pause');
		} else {
			$video[0].pause();
			$button.removeClass('pause');
		}
	}
});
