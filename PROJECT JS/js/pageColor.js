let color = ["#F97171","#FFFF00","#800080","#00cccc","#33cccc","#042a54","#006a46"];

let i =0 ;

if (localStorage.getItem('main_color')) {
    const i = parseInt(localStorage.getItem('main_color'));
    document.getElementById("main").style.background = color[i];
}

document.getElementById("dark").addEventListener("click", function(){
    i += i < color.length ? 1 : 0;
    document.getElementById("main").style.background = color[i];
    localStorage.setItem('main_color', String(i));
})