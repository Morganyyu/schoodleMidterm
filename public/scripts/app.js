$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).then((participants) => {
    for(participant of participants) {
      $("<div>").text(`ID: ${participant.id} Email: ${participant.email} \n Name: ${participant.name}`).appendTo($("body"));
    }
  });
});
