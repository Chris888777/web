class Student {
    constructor () {
        this.showData();
    }
    showData() {
        let data = sessionStorage.getItem('student');
        let studentData = JSON.parse(data);
        let main = document.getElementById('main');
        while (main.firstChild) {
            main.removeChild(main.firstChild);
         }
         main.innerHTML = '<h1> Student Data </h1>';
         main.innerHTML += '<p> Student ID : '+ studentData[0].studentID +'</p>';
         main.innerHTML += '<p> First Name : '+ studentData[0].firstName +'</p>';
         main.innerHTML += '<p> Last Name : '+ studentData[0].familyName +'</p>';
         main.innerHTML += '<p> Address : '+ studentData[0].address +'</p>';
         main.innerHTML += '<p> E-Mail : '+ studentData[0].email +'</p>';
         main.innerHTML += '<p> Mobile Number : '+ studentData[0].mobileNumber +'</p>';
         main.innerHTML += '<p> Registery Date : '+ studentData[0].registeryDate +'</p>';
    }
} 