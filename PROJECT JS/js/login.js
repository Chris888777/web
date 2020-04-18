class Login {
    getLogin (callback) {
        let form = document.getElementById("form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let user = form.elements["username"].value;
            let password = form.elements["password"].value;
            let url = 'https://rt-students.com/api/getStudent/' + user + '&' + password;
            new ApiRequest("GET", url, (data)=>{
                console.log(data);
                if (!data.status) {
                    sessionStorage.setItem('student',data);
                    callback(true);
                } else { console.log("err",data.status) };
            }, (err) => {console.log("err",err)});
        });
    }
} 