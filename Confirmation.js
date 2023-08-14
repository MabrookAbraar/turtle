const summaryname = document.getElementById('s1');
const summarydate = document.getElementById('s2');
const summarytime = document.getElementById('s3');
const summaryduration = document.getElementById('s4');
const summarymobile = document.getElementById('s5');
const summaryemail = document.getElementById('s6');
const summarygender =   document.getElementById('s7');
const summarysladult = document.getElementById('s8');
const summaryslchild = document.getElementById('s9');
const summaryforeignadult = document.getElementById('s10');
const summaryforeignchild = document.getElementById('s11');
const summaryinfant = document.getElementById('s12');
const summarytotal = document.getElementById('s13');

//Update Summary Table
function updateSummary(){
    summaryname.innerText = localStorage.getItem("name");
    summarydate.innerText = localStorage.getItem("date");
    summarytime.innerText = localStorage.getItem("time");
    summaryduration.innerText = localStorage.getItem("duration");
    summarymobile.innerText = localStorage.getItem("number");
    summaryemail.innerText = localStorage.getItem("email");
    summarygender.innerText = localStorage.getItem("gender");
    summarysladult.innerText = localStorage.getItem("currentsladult");
    summaryslchild.innerText = localStorage.getItem("currentslchild");
    summaryforeignadult.innerText = localStorage.getItem("currentforeignadult");
    summaryforeignchild.innerText = localStorage.getItem("currentforeignchild");
    summaryinfant.innerText = localStorage.getItem("currentinfant");
    summarytotal.innerText = localStorage.getItem("totalP");
}
window.addEventListener('load', updateSummary);