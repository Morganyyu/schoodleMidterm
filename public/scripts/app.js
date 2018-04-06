$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).then((participants) => {
    for(participant of participants) {
      $("<div>").text(`ID: ${participant.id} Email: ${participant.email} \n Name: ${participant.name}`).appendTo($("body"));
    }
  });

  $("main").on('click', '.user', function(e) {
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
  var createUsers;
  for(var i = 0; i < users.length; i++) {
   createUsers = users[i];
   let $element = createUserElement(createUsers);
   $('#userlist').prepend($element);
 }
}

  $("main").on('click', '.new-part', function(e) {
    const $button = $(this);

    const $tbody = $(`.event-table > tbody`);
    const $row = $(`<tr id="rowtemplate">`);
    const $user = $(`<td class="user">`).append(`<input name="name" class="name" type="text" placeholder="Your Name">
                                                <br /><input name="email" type="email" placeholder="Your Email">`);
    let $votes = $(`<td class="votes">`).append(`<input name="votes" class="votes" type="checkbox" disabled="disabled">`);
    ($tbody).append($row).append($user);


    return e;

  });


});
