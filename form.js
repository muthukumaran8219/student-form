// document.getElementById('studentForm').addEventListener('submit', function(event){
//     event.preventDefault();

//     const form = {

//         student: document.getElementById('student').value,
//         name: document.getElementById('name').value,
//         dob: document.getElementById('dob').value,
//         gender: document.getElementById('gender').value,
//         date: document.getElementById('date').value,
//         email: document.getElementById('email').value,
//         age: document.getElementById('age').value
//     };

//     fetch('https://6684d4e456e7503d1ae14dde.mockapi.io/Student',{
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(form)
//     })
//     .then(response => response.json())
//     .then(data => {
//         localStorage.setItem('form', JSON.stringify(data));
//         window.location.href = 'table.html';
//     })
//     .catch(error => console.error('Error:' ,error));

// });

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const editUserId = urlParams.get("edit");
  
    if (editUserId) {
      fetch(`https://66868bfc83c983911b02b3cd.mockapi.io/register/${editUserId}`)
        .then((response) => response.json())
        .then((data) => populateForm(data))
        .catch((error) => console.error("Error:", error));
    }
  });
  
  function populateForm(data) {
    console.log(data.date);
  
    var dateString = data.date;
  
    console.log(dateString);
  
    var dateArray = dateString.split("-");
    console.log(dateArray);
  
    var day = parseInt(dateArray[0]);
    var month = parseInt(dateArray[1]);
    var year = parseInt(dateArray[2]);
    console.log(typeof year);
    console.log(typeof month);
    console.log(day);
    var formattedDateString = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  
    console.log(typeof formattedDateString);
  
    document.getElementById("date").value = formattedDateString;
    document.getElementById("name").value = data.userName;
    document.getElementById("email").value = data.userEmail;
    document.getElementById("phonenumber").value = data.phoneNumber;
    document.getElementById("Languages").value = data.lang;
    document.getElementById("password").value = data.password;
    document.getElementById("cpassword").value = data.confirmPassword;
    if (data.gender === "Male") {
      document.getElementById("genderMale").checked = true;
    } else {
      document.getElementById("genderFemale").checked = true;
    }
  }
  
  function validation(event) {
    event.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const editUserId = urlParams.get("edit");
    let userName = document.getElementById("name").value,
      userEmail = document.getElementById("email").value,
      phoneNumber = document.getElementById("phonenumber").value,
      lang = document.getElementById("Languages").value,
      date = document.getElementById("date").value,
      maleGender = document.getElementById("genderMale"),
      femaleGender = document.getElementById("genderFemale"),
      password = document.getElementById("password").value,
      confirmPassword = document.getElementById("cpassword").value,
      status = document.getElementById("Status");
    if (userName === "") {
      document.getElementById("nameError").innerHTML = "*Name is Required...";
      document.getElementById("nameError").style.color = "red";
    } else if (userName.length < 3 || userName.length > 10) {
      document.getElementById("nameError").innerHTML =
        "Name must be between 3 and 10 characters ";
      document.getElementById("nameError").style.color = "red";
    } else {
      document.getElementById("nameError").innerHTML = "";
      console.log(userName);
    }
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (userEmail === "") {
      document.getElementById("emailError").innerHTML = "*Email is Required...";
      document.getElementById("emailError").style.color = "red";
    } else if (!email.test(userEmail)) {
      document.getElementById("emailError").innerHTML = "*Invalid Email Format";
      document.getElementById("emailError").style.color = "red";
    } else {
      document.getElementById("emailError").innerHTML = "";
      console.log(userEmail);
    }
    const phone = /^\d{10}$/;
    if (phoneNumber === "") {
      document.getElementById("numberError").innerHTML =
        "*Phone Number is Required...";
      document.getElementById("numberError").style.color = "red";
    } else if (!phone.test(phoneNumber)) {
      document.getElementById("numberError").innerHTML =
        "*Inavlid Phone Number! Please Enter 10 Digit Number ";
      document.getElementById("numberError").style.color = "red";
    } else {
      document.getElementById("numberError").innerHTML = "";
      console.log(phoneNumber);
    }
    if (lang === "") {
      document.getElementById("langError").innerHTML = "*Language is Required...";
      document.getElementById("langError").style.color = "red";
    } else {
      document.getElementById("langError").innerHTML = "";
    }
    if (date === "") {
      document.getElementById("dobError").innerHTML = "*D.O.B is Required...";
      document.getElementById("dobError").style.color = "red";
    } else {
      document.getElementById("dobError").innerHTML = "";
      console.log(date);
    }
    if (maleGender.checked || femaleGender.checked) {
      document.getElementById("genderError").innerHTML = "";
      console.log(maleGender.checked || femaleGender.checked);
    } else {
      document.getElementById("genderError").innerHTML = "*Gender is Required...";
      document.getElementById("genderError").style.color = "red";
    }
    const pscond =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6}$/;
  
    if (password === "") {
      document.getElementById("passwordError").innerHTML =
        "*Password is Required...";
      document.getElementById("passwordError").style.color = "red";
    } else if (!pscond.test(password)) {
      document.getElementById("passwordError").innerHTML =
        "*six characters is Required...";
      document.getElementById("passwordError").style.color = "red";
    } else {
      document.getElementById("passwordError").innerHTML = "";
      console.log(password);
    }
    if (confirmPassword === "") {
      document.getElementById("conpassword").innerHTML =
        "*Password is Required...";
      document.getElementById("conpassword").style.color = "red";
    } else if (password !== confirmPassword) {
      document.getElementById("conpassword").innerHTML =
        "*The Password Must Be Same...";
      document.getElementById("conpassword").style.color = "red";
    } else {
      document.getElementById("conpassword").innerHTML = "";
      console.log(confirmPassword);
    }
    if (status.checked == true) {
      console.log("right");
    } else {
      console.log("wrong");
    }
    if (
      userName == "" ||
      userName.length < 3 ||
      userName.length > 10 ||
      userEmail === "" ||
      !email.test(userEmail) ||
      phoneNumber === "" ||
      !phone.test(phoneNumber) ||
      !pscond.test(password)
    ) {
      return false;
    }
    let dateObject = new Date(date);
    const formattedDate = `${dateObject.getDate()}-${
      dateObject.getMonth() + 1
    }-${dateObject.getFullYear()}`;
    let dateChange = formattedDate;
    console.log(formattedDate);
    let file = {
      userName: userName,
      userEmail: userEmail,
      phoneNumber: phoneNumber,
      lang: lang,
      date: dateChange,
      password: password,
      confirmPassword: confirmPassword,
      status: status.checked ? "present" : "absent",
      gender: maleGender.checked ? "Male" : "Feamle",
    };
    console.log(file);
    
    if (editUserId) {
      fetch(`https://66868bfc83c983911b02b3cd.mockapi.io/register/:id`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(file),
      })
        .then((response) => {
          response.json();
          window.location.href = "table.html";
        })
  
        .catch((error) => console.error("Error:", error));
        
    } else if (
      userName !== "" &&
      userEmail !== "" &&
      phoneNumber !== "" &&
      lang !== "" &&
      date !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password == confirmPassword &&
      (maleGender.checked || femaleGender.checked)
    ) {
      fetch("https://66868bfc83c983911b02b3cd.mockapi.io/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(file),
      })
        .then((res) => {
          res.json();
        })
        .then(() => (window.location.href = "table.html"));
  
      console.log(file);
    }
    if (
      userName !== "" &&
      userEmail !== "" &&
      phoneNumber !== "" &&
      lang !== "" &&
      date !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      (maleGender.checked || femaleGender.checked) &&
      password == confirmPassword
    ) {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phonenumber").value = "";
      document.getElementById("date").value = "";
      document.getElementById("Languages").value = "";
      document.getElementById("password").value = "";
      document.getElementById("cpassword").value = "";
      genderMale.checked = false;
      genderFemale.checked = false;
    }
  }