document.getElementById('bookingForm').addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('bf-name').value.trim();
    var phone = document.getElementById('bf-phone').value.trim();
    var type = document.getElementById('bf-type').value;
    var date = document.getElementById('bf-date').value;
    var time = document.getElementById('bf-time').value;
    var notes = document.getElementById('bf-notes').value.trim();

    var lines = [
      "Hi BeYou, I'd like to book a nutrition session.",
      "Name: " + name,
      "Phone: " + phone,
      "Session type: " + type,
      "Preferred date: " + (date || "-"),
      "Preferred time: " + (time || "-")
    ];
    if(notes){ lines.push("Notes: " + notes); }

    var message = encodeURIComponent(lines.join("\n"));
    window.open("https://wa.me/250795448852?text=" + message, "_blank");
  });
