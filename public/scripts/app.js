$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).then((participants) => {
    for(participant of participants) {
      $("<div>").text(`ID: ${participant.id} Email: ${participant.email} \n Name: ${participant.name}`).appendTo($("body"));
    }
  });
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).then((participants) => {
     knex('events').insert({event_name: 'title', details: 'details', event_url: '', sched_name: "name", sched_email: "email"})

  });

});
