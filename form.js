document.getElementById('studentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  submitForm();
});

function submitForm() {
  const studentData = {
      studentId: document.getElementById('student').value,
      name: document.getElementById('name').value,
      dob: document.getElementById('dob').value,
      department: document.getElementById('dept').value,
      joiningDate: document.getElementById('date').value,
      email: document.getElementById('email').value,
      age: document.getElementById('age').value,
      gender: document.querySelector('input[name="Gender"]:checked').value
  };

  sendToMockApi(studentData);
}

function sendToMockApi(data) {
  fetch('https://66868bfc83c983911b02b3cd.mockapi.io/register', { // Replace with your mock API URL
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(result => {
      console.log('Success:', result);
      alert('Form submitted successfully!');
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Form submission failed.');
  });
}
