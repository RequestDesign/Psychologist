import $ from "jquery";

$('.btn__show-more').on('click', function(){
    $(this).siblings('.publications_cards').find('.article-card.hidden').each((_, card) => {
        $(card).slideDown().removeClass('hidden');
    });
});