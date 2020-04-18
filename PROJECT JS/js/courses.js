class Courses {
  constructor(page, data) {
    this.page = page;
    this.data = data;
    this.show();
    this.canvasChart();
  }

  show() {
    let corseData = JSON.parse(this.data);
    let main = document.getElementById("main");
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    main.innerHTML = this.page;
    let tbody = document.getElementById("tbody");
    for (let i = 0; i < corseData.length; i++) {
      tbody.innerHTML +=
        '<tr scope="row"> <td>' +
        corseData[i].code +
        "</td> <td>" +
        corseData[i].student +
        "</td> <td>" +
        corseData[i].examMark +
        "</td> <td>" +
        corseData[i].projectMark +
        "</td> <td>" +
        corseData[i].courseName +
        "</td> </tr>";
    }
  }

  getScoreColor = (score) => {
    if (score >= 0 && score <= 50) {
      return "red";
    } else if (score > 50 && score <= 80) {
      return "yellow";
    } else if (score > 80 && score <= 99) {
      return "green";
    } else if (score === 100) {
      return "blue";
    }
  };

  canvasChart() {
    let corseData = JSON.parse(this.data);
    var dataPoints = [];
    for (let i = 0; i < corseData.length; i++) {
      dataPoints.push({
        y: corseData[i].examMark,
        label: corseData[i].courseName,
        color: this.getScoreColor(parseInt(corseData[i].examMark)),
      });
    }

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "My Courses",
      },
      axisX: {
        interval: 1,
      },
      axisY2: {
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)",
        title: "My Grades",
      },
      data: [
        {
          color: "LightSeaGreen",
          type: "bar",
          name: "companies",
          axisYType: "secondary",
          dataPoints: dataPoints,
        },
      ],
    });
    chart.render();
  }
}
