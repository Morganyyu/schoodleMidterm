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

  $("main").on('click', '.new-part', function(e) {
    const $button = $(this);
    // console.log($button.data('enabled'));
    const $rowclone = $("#rowtemplate").clone();
    $rowclone.appendTo($(".event-table > tbody"));
    // $rowclone.find('.user')
    $("input.name").focus;

  });




});
