<button id="loadData" type="button">Load Data</button>
document.getElementById('loadData').addEventListener('click', function() {
  fetchDataFromMockApi();
});
document.addEventListener('DOMContentLoaded', function() {
  fetchDataFromMockApi();
});
function fetchDataFromMockApi() {
  fetch('https://66868bfc83c983911b02b3cd.mockapi.io/register') // Replace with your mock API URL
      .then(response => response.json())
      .then(data => {
          console.log(data); // For debugging

          // Assuming your API returns a structure similar to this:
          // { studentId: "123", name: "John Doe", dob: "2000-01-01", department: "CS", ... }
          document.getElementById('student').value = data.studentId || '';
          document.getElementById('name').value = data.name || '';
          document.getElementById('dob').value = data.dob || '';
          document.getElementById('dept').value = data.department || '';
          document.getElementById('date').value = data.joiningDate || '';
          document.getElementById('email').value = data.email || '';
          document.getElementById('age').value = data.age || '';
          
          // Set gender radio button
          if (data.gender === 'Male') {
              document.getElementById('genderMale').checked = true;
          } else if (data.gender === 'Female') {
              document.getElementById('genderFemale').checked = true;
          }
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          alert('Failed to load data.');
      });
}
  // {
  //   "studentId": "123",
  //   "name": "John Doe",
  //   "dob": "2000-01-01",
  //   "department": "Computer Science",
  //   "joiningDate": "2020-08-26",
  //   "email": "john.doe@example.com",
  //   "age": 22,
  //   "gender": "Male"
  // }
