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
const paybutton = document.getElementById('pay');
const CARDnumber = document.getElementById('cardnumber');
const NUMBERerror = document.getElementById('cardnumbererror');
const CARDname = document.getElementById('cardname');
const CARDnameerror = document.getElementById('cardnameerror');
const CARDexpiry = document.getElementById('expdate');
const EXPIRYdateerror = document.getElementById('expirydateerror');
const CARDcvv = document.getElementById('cvv');
const CVVerror = document.getElementById('cvverror');
const form = document.getElementById('form');
const requiredField = form.querySelectorAll('[required]');

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

    //button
    paybutton.innerText = `Pay ${localStorage.getItem("totalP")}`; 
}
window.addEventListener('load', updateSummary);

//validating Information and error message handling
function CardNumberHandling(){
    let digicarnum = CARDnumber.value.length;
    if(digicarnum == 16){
        NUMBERerror.innerText = " ";
    }else{
        NUMBERerror.innerText = "Card Number must be 16 digits";
    }
    let regex = /^[0-9]{16}$/;
    if(regex.test(CARDnumber.value)){
        NUMBERerror.innerText = " ";
    }else{
        NUMBERerror.innerText = "Card Must only contain 16 numbers";
    }
}
CARDnumber.addEventListener('input', CardNumberHandling);

function CardNameHandling(){
    let regex = /^[a-zA-Z ]{2,30}$/;
    if(regex.test(CARDname.value)){
        CARDnameerror.innerText = " ";
    }else{
        CARDnameerror.innerText = "Card Name must be 2-30 characters long";
    }
}
CARDname.addEventListener('input', CardNameHandling);

function CardExpHandling(){
    
    if(CARDexpiry.value != ""){
        EXPIRYdateerror.innerText = " ";
    }else{
        EXPIRYdateerror.innerText = "Card Expiry must be in MM/YY format";
    }
}
CARDexpiry.addEventListener('input', CardExpHandling);

function CardCvvHandling(){
    if(CARDcvv.value != ""){
        CVVerror.innerText = " ";}
    else{
        CVVerror.innerText = "Card CVV must be 3 digits";
    }
}
CARDcvv.addEventListener('input', CardCvvHandling);

//Button activation
function RequiredFullFilled(){
    for(const field of requiredField){
        if(!field.value.trim()){
            return false;
        }
    }
    return true;
}
function ButtonActivation(){
    if(RequiredFullFilled()){
        paybutton.removeAttribute('disabled');
    }else
    {
        paybutton.setAttribute('disabled', true);
    }
}
requiredField.forEach(field => field.addEventListener('input', ButtonActivation));
