$(document).ready(function() {
    $("#stt-wrapper").click(function() {
      console.log('I AM CLICKED');
      $("html, body").animate({ scrollTop: 0 }, 0);
      return false;
    });
  });