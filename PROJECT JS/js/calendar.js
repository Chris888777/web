class Lessons {
    sessionDates = [];

    constructor (page, data) {
        this.page = page;
        this.data = data;
        this.show();
    }
    show(){
        let lessonData = JSON.parse(this.data);
        let main = document.getElementById('main');
        while (main.firstChild){
            main.removeChild(main.firstChild);
        }

        main.innerHTML = this.page;
        let tbody = document.getElementById('tbody');
        for( let i = 0; i < lessonData.length; i++) {
            const sp = lessonData[i].sessionDate.split('T');
            this.sessionDates.push(sp[0]);

            tbody.innerHTML += '<tr scope ="row"><td>' +
            lessonData[i].code + '</td><td>' + 
            lessonData[i].sessionNum + '</td><td>' +
            lessonData[i].locationId + '</td><td>' +
            lessonData[i].sessionType + '</td><td>' +
            lessonData[i].teacher + '</td><td>' +
            lessonData[i].sessionDate + '</td><td>' +
            lessonData[i].sessionEndDate + '</td></tr>';
            
        }

        console.log(this.sessionDates);
    }
}