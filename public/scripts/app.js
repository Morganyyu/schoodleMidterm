$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).then((participants) => {
    for(participant of participants) {
      $("<div>").text(`ID: ${participant.id} Email: ${participant.email} \n Name: ${participant.name}`).appendTo($("body"));
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
                                  <input name="name" type="text" placeholder="Your Name">
                                    <br />
                                  <input name="email" type="email" placeholder="Your Email">
                                </td>
                              </form>
                            </tr>`;

       let $newRow = $(userRowTemplate);
       for(i = 0; i < votelength-1; i++){

         let voteBoxTemplate = `<td class="votes">
                                  <input type="checkbox" value ="${user_count}_${vote_count}">
                                </td>`;

         $newRow.append(voteBoxTemplate);
         vote_count++;
       }
       let submitBtnTemplate = `<button type="submit" class="submit">Submit</button>`;
       $newRow.append(submitBtnTemplate);
       $(`table.event-table`).append($newRow);
       user_count++;

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


function renderUsers(users) {

  let createUsers;

  for(var i = 0; i < users.length; i++) {
    createUsers = users[i];
    let $element = createUserElement(createUsers);
    $('#userlist').prepend($element);
  }
}

function createVoteElem(vote) {
  let name;
  let email;

}

$("#createVote").on('click', '.submit', function(e) {
  e.preventDefault();
  let data = $("#createVote").serialize();
  $.post("/votes", data)

})


});
