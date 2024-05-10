import $ from 'jquery';

$('.tab-btn').on('click', function (evt) {
	evt.preventDefault();
	let $this = $(this);
	let index = $this.index();
	let $tabs = $this.closest('.tabs');
	let $tabs_container = $tabs.find('.tabs-container');
	let $tab_contents = $tabs_container.find('.tabs-content');
	$this.siblings('.tab-btn').removeClass('active');
	$this.addClass('active');
	$tab_contents.removeClass('active');
	$tab_contents.eq(index).addClass('active');
});
