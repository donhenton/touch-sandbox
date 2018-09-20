(function ($) {




  $.fn.popupText = function () {
    return this.each(function () {
      if (!this.popupText) {
        new PopupText(this);
      }
    });
  };

  $('document').ready(function () {
    $('.popup-text').popupText();
  });


  function PopupText(elem) {

    var $popupTextContent = $(elem);
    if (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
      $popupTextContent.on("clear-popup", function (ev) {

 
        if ($popupTextContent.hasClass('showing')) {
          $popupTextContent.toggleClass('hide');
          $popupTextContent.removeClass('showing');
        }


      });

    }



  }


})(jQuery)


