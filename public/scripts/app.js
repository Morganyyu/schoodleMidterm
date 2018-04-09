$(() => {
  $.ajax({
    method: "GET",
    url: "/:id"
  }).then((randomvar) => {
    console.log('GET REQUEST WORKED HOORAY WEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE ' + randomvar)
  });


  let user_count = 0;
  let votelength = 0;

  $("main").on('click', '.new-part', function(e) {
    let votelength = $("#voteslength > th").length;
    let vote_count = 0;
    const $button = $(this);
    const $row = $('<tr id="rowtemplate">');
    var $pastUsers = $('.user').length
    if($pastUsers){
      user_count = $pastUsers
    };


     let userRowTemplate = `<tr id="user_${user_count}" class="participant">
                              <form method="POST" action="/vote" id="createVote" onsubmit="submitform()">
                                <td class="user">
                                  <input name="name" class="name" type="text" placeholder="Your Name" maxlength="64" required="required">
                                    <br />
                                  <input name="email" class="email" type="email" placeholder="Your Email" maxlength="64" required="required">
                                </td>
                            </tr>`;

       let $newRow = $(userRowTemplate);
       for(i = 0; i < votelength-1; i++){

         let voteBoxTemplate = `<td class="votes">
                                  <input type="checkbox" class="votebox" value ="${user_count}_${vote_count}">
                                </td>`;

         $newRow.append(voteBoxTemplate);
         vote_count++;
       }

       let submitBtnTemplate = `<button type="submit" class="submit">Submit</button></form>`;
       $newRow.append(submitBtnTemplate);
       $(`table.event-table`).append($newRow);
       user_count++;

      let clickedObj = {}
      var row = user_count - 1
          var spot = votelength - 1
          for (i = 0; i < spot; i++){
            clickedObj[(row + '_' + i)] = false
          }

       $( "input[type=checkbox]" ).on( "click", function(x) {
          let whatev = $(this)
          let whatevVal = whatev.val()
          clickedObj[whatevVal] = whatev[0].checked
        });



        $('.submit').on('click', function(e) {
        e.preventDefault();
        console.log(clickedObj)
        //you have to vote for something in order to submit, protest votes don't count!
        let button = $(this);
        var tds = $(this).siblings();
        var name = tds.children(".name").val();
        var email = tds.children(".email").val();
        clickedObj['email'] = email
        clickedObj['name'] = name


        $.ajax({
           type: "POST",
           url: "/vote",
           dataType: "json",
           success: function (msg) {
               if (msg) {
                   alert("It worked! How lit!");
                   location.reload(true);
               } else {
                   alert("Not lit fam :(");
               }
           },
           data: clickedObj
       });
      })
       return e;
    });

        $(".user").on('click', function(e) {
        const $votebox = $(this).siblings().children("input[type=checkbox]");
        console.log($votebox);
        let submitBtnTemplate = `<button type="submit" class="submit">Submit</button></form>`;
        $($votebox).removeAttr("disabled");
        $(this).parent(".add-new").append(submitBtnTemplate);

        let clickedObj = {}

       $( "input[type=checkbox]" ).on( "click", function(x) {
          let whatev = $(this)
          let whatevVal = whatev.val()
          console.log('This is clickedObj ' + JSON.stringify(clickedObj))
          console.log('whatev ' + JSON.stringify(whatev))
          console.log('whatevVal ' + whatevVal)
          clickedObj[whatevVal] = whatev[0].checked
        });



        $('.sumbit').on('click', '.user', function(e) {
        e.preventDefault();
        console.log(clickedObj)
        //you have to vote for something in order to submit, protest votes don't count!
        let formObj = {};
        let button = $(this);
        var tds = $(this).siblings();


        $.ajax({
           type: "POST",
           url: "/vote",
           dataType: "json",
           success: function (msg) {
               if (msg) {
                   alert("It worked! How lit!");
                   location.reload(true);
               } else {
                   alert("Not lit fam :(");
               }
           },
           data: clickedObj
       });
      })
  });

});
