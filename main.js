document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Gather form data
    const student = {
        ID: document.getElementById('ID').value,
        name: document.getElementById('name').value,
        DOB: document.getElementById('DOB').value,
        gender: document.querySelector('input[name="Gender"]:checked').value,
        department: document.getElementById('Dept').value,
        joiningDate: document.getElementById('jd').value,
        email: document.getElementById('mail').value,
        age: document.getElementById('age').value
    };

    // Mock API post request simulation
    fetch('https://66868bfc83c983911b02b3cd.mockapi.io/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);

        // Store data in localStorage
        let studentData = JSON.parse(localStorage.getItem('studentData')) || [];
        studentData.push(student);
        localStorage.setItem('studentData', JSON.stringify(studentData));

        // Navigate to table page
        window.location.href = 'table.html';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
