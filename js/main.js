$(document).ready(function() {
  $('[data-fancybox="gallery"]').fancybox(); 
});
 
    let $search = $('#myinput');
    let $photos = $('.photo');

$search.keyup(function(event){
  let val = $search.val().toLowerCase();
  $photos.show();
  if ( val !== '')  {
    $photos.not('[data-caption*="' + val + '"]').hide();
  }
});

