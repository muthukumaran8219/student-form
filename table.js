// document.addEventListener('DOMContentLoaded', function(){
//     const form = JSON.parse(localStorage.getItem('form'));

//     if(form){
//         const tablebody = document.getElementById('tablebody');
//         const row = `<tr>
//             <td>${form.student}</td>
//             <td>${form.name}</td>
//             <td>${form.dob}</td>
//             <td>${form.gender}</td>
//             <td>${form.date}</td>
//             <td>${form.email}</td>
//             <td>${form.age}</td>
//         </tr>`;
//         tablebody.innerHTML = row;
//     }
// });
function returnPage() {
    window.location.href = "index.html";
  }
  window.onload = () => {
    tableAdd();
  };
  function tableAdd() {
    fetch("https://65b1d9849bfb12f6eafc3b4b.mockapi.io/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => { 
        let table = "";
        for (let i = 0; i < data.length; i++) {
          data;
          table += "<tr>";
          table += "<td>" + data[i].userName + "</td>";
          table += "<td>" + data[i].userEmail + "</td>";
          table += "<td>" + data[i].phoneNumber + "</td>";
          table += "<td>" + data[i].lang + "</td>";
          table += "<td>" + data[i].date + "</td>";
          table += "<td>" + data[i].gender + "</td>"
          table += "<td>" + data[i].password + "</td>";
          table += "<td>" + data[i].confirmPassword + "</td>";
          table += "<td>" + data[i].status + "</td>"
          table +=
            "<td> <button onclick = 'editData(" +
            data[i].id +
            ")'>Edit</button> <button onclick = 'deleteData(" +
            data[i].id +
            ")'>Delete</button></td>";
          table += "</tr>";
        }
        document.getElementById("tbody").innerHTML = table;
      });
  }
  function deleteData(id) {
    fetch("https://65b1d9849bfb12f6eafc3b4b.mockapi.io/data/" + id, {
      method: "DELETE",
    })
    .then(()=> window.location.reload())
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  
    // tableAdd();
  }
  
  function editData(userId) {
    window.location.href = `index.html?edit=${userId}`;
  }