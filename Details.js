let countrycode = document.getElementById("CountryCode");
let phonenumber = document.getElementById("number");
let datedetail = document.getElementById("detail1");
let timedetail = document.getElementById("detail2");
let durationdetail = document.getElementById("detail3");
let sladultdetail = document.getElementById("detail4");
let slchilddetail = document.getElementById("detail5");
let foreignadultdetail = document.getElementById("detail6");
let foreignchilddetail = document.getElementById("detail7");
let infantdetail = document.getElementById("detail8");
let totaldetail = document.getElementById("detail9");
let gend = document.getElementById("gender");
let next = document.getElementById("next");
let form = document.getElementById("form");
const requiredField = form.querySelectorAll('[required]');
const nameerror = document.getElementById("NAMEerror");
const numbererror = document.getElementById("NUMBERerror");
const emailerror = document.getElementById("EMAILerror");
const confirmemailerror = document.getElementById("CONFIRMEMAILerror");
let fullname = document.getElementById("name");
let email = document.getElementById("email");
let confirmemail = document.getElementById("confirmemail");

//Phone number with country code
function CountryCode(){ 
    const selectcountrycode = countrycode.value;
    phonenumber.setAttribute("value", selectcountrycode + "-");
}
countrycode.addEventListener("change", CountryCode);

//Update Summary table
function updateSummary(){
    datedetail.innerHTML = localStorage.getItem("date");
    timedetail.innerHTML = localStorage.getItem("time");
    durationdetail.innerHTML = localStorage.getItem("duration");
    let sladultprice = localStorage.getItem("currentsladult");
    let slchildprice = localStorage.getItem("currentslchild");
    let foreignadultprice = localStorage.getItem("currentforeignadult");
    let foreignchildprice = localStorage.getItem("currentforeignchild");
    let infantprice = localStorage.getItem("currentinfant");
    let tp = localStorage.getItem("totalP");
    sladultdetail.innerHTML = `${sladultprice}`;
    slchilddetail.innerHTML = `${slchildprice}`;
    foreignadultdetail.innerHTML = `${foreignadultprice} `;
    foreignchilddetail.innerHTML = `${foreignchildprice} `;
    infantdetail.innerHTML = `${infantprice}`;
    totaldetail.innerHTML = `${tp} `;
}
addEventListener("load", updateSummary);

//Button activation
function Requirment(){
    for(const field of requiredField){
        if(!field.value.trim()){
            return false;
        }
    }
    return true;
}
function ButtonActivation(){
    if(Requirment()){
        next.removeAttribute('disabled');
    }else {
        next.setAttribute('disabled', 'disabled');
    }
}
requiredField.forEach(field => field.addEventListener('input', ButtonActivation)); 
ButtonActivation();

//validating Information and error message handling
function NameErrorHandle(){
  const   funame = fullname.value.trim();
    const name = funame.split(" ");

    if(name.length >= 1){
        nameerror.innerText = " ";
    }else{
        nameerror.innerText = "Please enter your full name";
    }
    fullname.addEventListener("input", NameErrorHandle);
}
fullname.addEventListener("input", NameErrorHandle);

function NumberErrorHandle(){
    const   num = number.value.trim();
      const numb = num.split(" ");
  
      if(numb.length >= 1){
          numbererror.innerText = " ";
      }else{
          numbererror.innerText = "Add a valid phone number";
      }
      number.addEventListener("input", NumberErrorHandle);
  }
number.addEventListener("input", NumberErrorHandle);

function EmailErrorHandle(){
    const   EMail = email.value.trim();
    const EMAIL = EMail.split("@");
  
      if(EMAIL.length >= 2){
          emailerror.innerText = "";
      }else{
          emailerror.innerText = "Add a valid email";
      }
      email.addEventListener("input", EmailErrorHandle);
  }
email.addEventListener("input", EmailErrorHandle);

function CemailErrorHandle(){
    const inemail = email.value.trim();
    const inconfirmemail = confirmemail.value.trim();
      if(inemail === inconfirmemail){
          confirmemailerror.innerText = " ";
      }else{
          confirmemailerror.innerText = "Email does not match";
      }
      confirmemail.addEventListener("input", CemailErrorHandle);
  }
confirmemail.addEventListener("input", CemailErrorHandle);

//Storing Information
function SaveData(){
    localStorage.setItem("name", fullname.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("number", phonenumber.value);
    localStorage.setItem("gender",gend.value);
}
next.addEventListener("click", SaveData);