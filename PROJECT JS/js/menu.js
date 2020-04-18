class MenuBar {

    constructor() {
        this.coursePage = '<h1>Student Courses</h1><table class="table table-light"><thead><tr><th scope="col">Code</th><th scope="col">Student</th><th scope="col">Exam</th><th scope="col">Project</th><th scope="col">Course</th></tr></thead><tbody id = "tbody"><!-- TR+TD --></tbody></table>';
        this.calendarPage = '<h1>Student Calendar</h1><table class="table table-light"><thead><tr><th scope="col">Code</th><th scope="col">SessionNum</th><th scope="col">LocationId</th><th scope="col">SessionType</th><th scope="col">SessionDate</th><th scope="col">SessionEndDate</th><th scope="col">Teacher</th></tr></thead><tbody id = "tbody"><!-- TR+TD --></tbody></table>';
        this.student = JSON.parse(sessionStorage.getItem('student'));
        this.listen();
    }

    listen () {
        let menu = document.querySelector('nav');
        menu.removeAttribute('hidden');

        document.getElementById('student').onclick = () => {            
            document.getElementById("chartContainer").style.visibility = "hidden"
            new Student;
        }
        document.getElementById('course').onclick = () => {
            document.getElementById("chartContainer").style.visibility = "block"
            let url = 'https://rt-students.com/api/getCourses/' + this.student[0].studentID;
            new ApiRequest("GET", url, (data)=>{new Courses(this.coursePage,data)}, (err) => {console.log("err",err)});
        }
        document.getElementById('lesson').onclick = () => {
            document.getElementById("chartContainer").style.visibility = "hidden"
            let url = 'https://rt-students.com/api/getCalendar/' + this.student[0].studentID;
            new ApiRequest("GET", url, (data)=>{new Lessons(this.calendarPage,data)}, (err) => {console.log("err",err)});
        }
        document.getElementById('contacts').onclick = () => {
            document.getElementById("chartContainer").style.visibility = "hidden"
            new Contacts;
        }
    }
}