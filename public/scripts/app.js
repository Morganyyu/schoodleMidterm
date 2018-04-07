$(() => {
  $.ajax({
    method: "GET",
    url: "/:id"
  }).then((timeslots) => {
    for(timeslot of timeslots) {
      $("<div>").text(`ID: ${timeslot.id} start: ${timeslot.start_time}  end: ${timeslot.end_time} event id: ${event_id}`).appendTo($("body"));
    }
  });

  let user_count = 0;

  $("main").on('click', '.new-part', function(e) {
     let votelength = $("#voteslength > th").length;
     let vote_count = 0;
     const $button = $(this);
     const $row = $('<tr id="rowtemplate">');
     console.log(votelength);

     let userRowTemplate = `<tr id="user_${user_count}" class="participant">
                              <form method="POST" action="/vote" id="createVote">
                                <td class="user">
                                  <input name="name" type="text" placeholder="Your Name" required="required">
                                    <br />
                                  <input name="email" type="email" placeholder="Your Email" required="required">
                                </td>
                              </form>
                            </tr>`;

       let $newRow = $(userRowTemplate);
       for(i = 0; i < votelength-1; i++){

         let voteBoxTemplate = `<td class="votes">
                                  <input type="checkbox" class="votebox" value ="${user_count}_${vote_count}">
                                </td>`;

         $newRow.append(voteBoxTemplate);
         vote_count++;
       }
       let submitBtnTemplate = `<button type="submit" class="submit">Submit</button>`;
       $newRow.append(submitBtnTemplate);
       $(`table.event-table`).append($newRow);
       user_count++;

       $('.submit').on('click', function(e) {
        e.preventDefault();
        let formObj = {};
        let button = $(this);
        var tds = $(this).parent().siblings();
        // tds.forEach()
        // let data = $("#createVote");
        console.log(tds[1]);
        console.log("clicked");
        console.log(e);
        // $.post("/votes", data)
      // if(".votebox").checked) {
      //     $("#txtAge").show();
      // } else {
      //     $("#txtAge").hide();
      // }
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


// function renderUsers(users) {

//   let createUsers;

//   for(var i = 0; i < users.length; i++) {
//     createUsers = users[i];
//     let $element = createUserElement(createUsers);
//     $('#userlist').prepend($element);
//   }
// }

// function createVoteElem(vote) {
//   // let name = req.body.name;
//   // let email = req.body.email;

//   let voteTemplate = `<tr id="user_${user_count}" class="participant">
//                               // <form method="POST" action="/vote" id="createVote">
//                                 <td class="user">
//                                   <>
//                                     <br />
//                                   <input name="email" type="email" placeholder="Your Email" required="required">
//                                 </td>
//                               // </form>
//                             </tr>`;

// }




});
