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
                                <input name="name" class="name" type="text" placeholder="Your Name" required="required">
                                  <br />
                                <input name="email" class="email" type="email" placeholder="Your Email" required="required">
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

      $('input[type="checkbox"]').on('click', function(e) {
        let box = $(this);
        let value = box.val();
        console.log(value);
        console.log(e);
        console.log(box[0].checked);
      });

      $('.submit').on('click', function(e) {
        e.preventDefault();
        let formObj = {};
        let button = $(this);
        var tds = $(this).siblings();
        var name = tds.children(".name").val();
        var email = tds.children(".email").val();

        var arr = [];

        console.log(input[type="checkbox".prop('checked')]);



          for(var j=0; j<votelength-1; j++){

            if($(input[type="checkbox"]).prop('checked')){
              arr.push(true);
            } else {
              arr.push(false);
            }
          }

        console.log(arr);


        console.log(name);
        console.log(email);
        console.log(e);
        // $.post("/votes", data)

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
