document.getElementById('submit-btn').addEventListener('click', function () {
  const guestName = document.getElementById('guest-name').value;
  const roomNumber = document.getElementById('room-number').value;
  const complaintInquiry = document.getElementById('complaint-inquiry').value;

  if (!guestName || !roomNumber) {
    alert("Please fill in both guest name and room number.");
    return;
  }

  const servicesRequested = [];

  // Collect selected services for Room Service
  const roomService = [];
  document.querySelectorAll('input[name="room-service"]:checked').forEach(function (checkbox) {
    roomService.push({
      name: checkbox.value,
      description: "Description for " + checkbox.value // Add description for room service items
    });
  });
  if (roomService.length > 0) {
    servicesRequested.push({
      serviceType: "Room Service",
      selectedServices: roomService
    });
  }

  // Collect selected services for Housekeeping
  const housekeeping = [];
  document.querySelectorAll('input[name="housekeeping"]:checked').forEach(function (checkbox) {
    housekeeping.push({
      name: checkbox.value,
      description: "Description for " + checkbox.value // Add description for housekeeping items
    });
  });
  if (housekeeping.length > 0) {
    servicesRequested.push({
      serviceType: "Housekeeping",
      selectedServices: housekeeping
    });
  }

  // Collect selected services for Concierge
  const concierge = [];
  document.querySelectorAll('input[name="concierge"]:checked').forEach(function (checkbox) {
    concierge.push({
      name: checkbox.value,
      description: "Description for " + checkbox.value // Add description for concierge items
    });
  });
  if (concierge.length > 0) {
    servicesRequested.push({
      serviceType: "Concierge",
      selectedServices: concierge
    });
  }

  // Collect selected services for Spa & Wellness
  const spa = [];
  document.querySelectorAll('input[name="spa"]:checked').forEach(function (checkbox) {
    spa.push({
      name: checkbox.value,
      description: "Description for " + checkbox.value // Add description for spa items
    });
  });
  if (spa.length > 0) {
    servicesRequested.push({
      serviceType: "Spa & Wellness",
      selectedServices: spa
    });
  }

  // Prepare the request data
  const requestData = {
    guestName,
    roomNumber,
    servicesRequested,
    complaintInquiry
  };

  // Send POST request to the backend
  fetch('https://hotel-services-production.up.railway.app/api/services/request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData)
  })
  .then(response => response.json())
  .then(data => {
    alert("Request submitted successfully!");
  })
  .catch(error => {
    alert("Error submitting request.");
    console.error("Error details:", error);
  });
});
