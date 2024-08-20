document.addEventListener('DOMContentLoaded', function() {
    let studentData = JSON.parse(localStorage.getItem('studentData')) || [];
    
    const tableBody = document.getElementById('studentTableBody');
    studentData.forEach(student => {
        const row = `
            <tr>
                <td>${student.ID}</td>
                <td>${student.name}</td>
                <td>${student.DOB}</td>
                <td>${student.gender}</td>
                <td>${student.department}</td>
                <td>${student.joiningDate}</td>
                <td>${student.email}</td>
                <td>${student.age}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
});
