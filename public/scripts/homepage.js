$(function () {

// $(".add").on("click", () => {
//   $(".event-date").show();
// })
  $(".add").on('click', function (e) {
      e.preventDefault();// to prevent form submit
      var $self = $(this);
      $self.before($self.prev("div").clone());// use prev() not parent()
      //$self.remove();// remove this line so you can add more inputs
  });

})
