$('.skills dd').each(function() {
    $(this).css({
      width: $(this).text() + '%'
    });
  });
  

  $(function() {
   $('.matchHeight').matchHeight();
  });