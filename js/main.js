$(document).ready(function() {
  $('[data-fancybox="gallery"]').fancybox(); 
});
 
    let $search = $('#myinput');
    let $imgs = $('.photo');

$search.keyup(function(event){
  let val = $search.val().toLowerCase();
  $imgs.show();
  if ( val !== '')  {
    $imgs.not('[data-caption*="' + val + '"]').hide();
  }
});

