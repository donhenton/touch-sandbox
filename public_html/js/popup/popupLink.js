(function ($) {




  $.fn.popupLink = function () {
    return this.each(function () {
      if (!this.popupLink) {
        new PopupLink(this);
      }
    });
  };

  $('document').ready(function () {
    $('.popup-link').popupLink();

    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
      $(document).on('touchstart', function (ev) {

        if ($(ev.target).hasClass('showing') === false) {
          $('.popup-text').trigger('clear-popup')
        }
      });
    }


  });


  function PopupLink(elem) {

    var $popupLinkContent = $(elem);
    var targetId = $popupLinkContent.attr('data-popupText');
    var $textTarget = $('#' + targetId);
    var pointerHeight = 10;

    $popupLinkContent.on('mouseenter touchstart', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();

      if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {

        $('.popup-text').trigger('clear-popup')

      }


      console.log("mouseenter")
      var fullWidth = $textTarget.outerWidth();
      var halfWidth = fullWidth / 2;

      //bottom ? $(this).offset().top - $(this).scrollTop() + $(this).outerHeight() + pointerHeight :


      //var topPosition = $(this).offset().top  - $textTarget.outerHeight() - pointerHeight //- $(this).scrollTop();
      //var leftPosition = ev.pageX - halfWidth;   //- $bodyWrapper.position().left;
      //bottom ? event.clientY + 13 + "px" :
      var topPosition = ev.clientY - 13 - $textTarget.outerHeight() - pointerHeight + "px";
      var leftPosition = ev.clientX - ($textTarget.outerWidth() / 2) + "px";
      if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {

        topPosition = (ev.originalEvent.pageY - $textTarget.outerHeight() - 20) + "px";
        ;
        leftPosition = ev.originalEvent.pageX;
      }

      $textTarget.css({
        top: topPosition,
        left: leftPosition,
        'position': 'absolute'
              // }).fadeIn('slow');
      })
  
      $textTarget.toggleClass('hide');
      $textTarget.addClass('showing');



    });

    $popupLinkContent.on('mouseleave', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      console.log("mouseleave")
      $textTarget.toggleClass('hide');
      $textTarget.removeClass('showing');

    });
  }


})(jQuery)