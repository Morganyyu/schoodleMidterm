$(() => {
  $.ajax({
    method: "GET",
    url: "/:id"
  }).then((randomvar) => {
    console.log('GET REQUEST WORKED HOORAY WEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE ' + randomvar)
  });

  let user_count = 0;

  $("main").on('click', '.new-part', function(e) {
    let votelength = $("#voteslength > th").length;
    let vote_count = 0;
    const $button = $(this);
    const $row = $('<tr id="rowtemplate">');
    console.log(votelength);


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

       $( "input[type=checkbox]" ).on( "click", function(x) {
          let whatev = $(this)
          let whatevVal = whatev.val()
          clickedObj[whatevVal] = whatev[0].checked
        });

       // $('#createVote').validator('update');
       $('.submit').on('click', function(e) {

        e.preventDefault();
        console.log('this should be event id ' + event.id)
        console.log(clickedObj)
        //you have to vote for something in order to submit, protest votes don't count!
        let formObj = {};
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

  $("main").on('click', '.new-part', function(e) {
    const $button = $(this);
    const $tr = $(this).parents('tr');

    if($button.data('enabled')) {
      $button.data('enabled', true);

      $button.css("font-weight","bold");
      $tr.find('input').prop('disabled', '');
    } else {
      $button.data('enabled', true);
      $button.css("font-weight","normal");
      $tr.find('input').prop('disabled', 'disabled');
    }
    console.log($button.data('enabled'));
  });

});
