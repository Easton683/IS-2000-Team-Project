$(document).ready(function() {
    $("#stt-wrapper").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 0);
      return false;
    });
  });

  function purchase() {
    alert("Thank you for your purchase!");
  }