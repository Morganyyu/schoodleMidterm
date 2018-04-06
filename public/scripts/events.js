$(function () {

  $(".fa-edit").on('click', function () {
    $(input).removeAttr("disabled");
  });

    function createEventElement(data){

      // Redefining and appending variables for jQuery

      let username = data['user'].name;
      let days = moment(data['created_at']).fromNow();

      let $tweet = $("<article>").addClass("tweets");
      let $header = $("<header>").addClass("header");

      let $img = $("<img>").addClass("avatar");
      $img.attr('src', avatar);
      $header.append($img);


      return $event;
    }


    // AJAX loadTweets function

    function loadEvents () {
      $.ajax({
        url: '/tweets',
        method: 'GET',
        success: function (moreEventsHtml){
        console.log('Success: ', moreEventsHtml);
        renderTweets(moreEventsHtml)
      }
    });
    }

   loadTweets();


   // AJAX postTweets function

   function postEvents(data) {

     $.ajax({
       url: '/tweets',
       method: 'POST',
       data: data,
       success: function (moreEventsHtml){
       console.log('Success: ', moreEventsHtml);
       }
     });
 }
});
