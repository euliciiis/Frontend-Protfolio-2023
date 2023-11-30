const $galleryContainer = $('.gallery').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
})

$('.button-group .filter-button').on('click', function(){
  $('.button-group .filter-button').removeClass('active-btn');
  $(this).addClass('active-btn');

  let value = $(this).attr('data-filter');
  $galleryContainer.isotope({
    filter: value
  })
})