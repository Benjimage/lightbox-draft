(function($){
  
  const refImg = $('#img1').data('reference');
  $('.reference-img').html(refImg);

  const catImg = $('#img1').data('categorie');
  $('.categorie-img').html(catImg);
  
  const refImg2 = $('#img2').data('reference');
  $('.reference-img').html(refImg2);

  const catImg2 = $('#img2').data('categorie');
  $('.categorie-img').html(catImg2);
  

  $(document).on('click', '.fullscreen-icon', function() {
      $('#lightbox').css("display", "flex");
  });
  $('#prev-img').on('mouseenter',function(){
    $('#prev-img').attr('src','images/prev-hover.svg');
  });

  $('#prev-img').on('mouseleave',function(){
    $('#prev-img').attr('src','images/prev-img.svg');
  });

  $('#next-img').on('mouseenter',function(){
    $('#next-img').attr('src','images/next-hover.svg');
  });
  $('#next-img').on('mouseleave',function(){
    $('#next-img').attr('src','images/next-img.svg');
  });

  $('.close-button').on('click', function() {
      $('#lightbox').hide();
  })


})(jQuery)
