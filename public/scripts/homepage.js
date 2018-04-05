$(function () {

  $(".add").on('click', function () {
      $(".event-date:first-child").clone().appendTo(".all-events");
  });

})
