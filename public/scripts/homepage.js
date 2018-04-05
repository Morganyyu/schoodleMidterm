$(function () {

// $(".add").on("click", () => {
//   $(".event-date").show();
// })
  $(".add").on('click', function () {
      $(".event-date:first-child").clone().appendTo(".all-events");
  });

})
