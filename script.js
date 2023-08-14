let peekhr =0;
let normhr =0;
let toSLadult  =0;
let toSLchild =0;
let toFOREIGNadult =0;
let toFOREIGNchild =0;
let total =0;

const form = document.getElementById("form");
const currdate =document.getElementById("currdate");
const date = document.getElementById("date");
const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const incre = document.getElementById("increase");
const incre1 = document.getElementById("increase1");
const incre2 = document.getElementById("increase2");
const incre3 = document.getElementById("increase3");
const incre4 = document.getElementById("increase4");
const sladult = document.getElementById("sladult");
const slchild = document.getElementById("slchild");
const foreignadult = document.getElementById("foreignadult");
const foreignchild = document.getElementById("foreignchild");
const infant = document.getElementById("infant");
const decr = document.getElementById("decrease");
const decr1 = document.getElementById("decrease1");
const decr2 = document.getElementById("decrease2");
const decr3 = document.getElementById("decrease3");
const decr4 = document.getElementById("decrease4");
const duration = document.getElementById("duration");
const subbtn = document.getElementById("next");

//Current Date to display on the load of page..
function curDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    currdate.innerHTML = `${year} -0${month+1} -0${day}`;
}
addEventListener("load", curDate);

//when date is changed from the date picker
function dateChange(){
    let newdate = date.value;
    currdate.innerHTML = `${newdate}`;
}
date.addEventListener("change", dateChange);

//increment value
function INsladult(){
    let value = parseInt(sladult.value);
    value++;
    sladult.value = value;
}
function INslchild(){
    let value = parseInt(slchild.value);
    value++;
    slchild.value = value;
}
function INforeignadult(){
    let value = parseInt(foreignadult.value);
    value++;
    foreignadult.value = value;
}
function INforeignchild(){
    let value = parseInt(foreignchild.value);
    value++;
    foreignchild.value = value;
}
function INinfant(){
    let value = parseInt(infant.value);
    value++;
    infant.value = value;
}

incre.addEventListener("click", INsladult);
incre1.addEventListener("click", INslchild);
incre2.addEventListener("click", INforeignadult);
incre3.addEventListener("click", INforeignchild);
incre4.addEventListener("click", INinfant);

//decrement value
function DEsladult(){
    let value = parseInt(sladult.value);
    if(value>0){
    value--;
    sladult.value = value;
    }
}
function DEslchild(){
    let value = parseInt(slchild.value);
    if(value>0){
    value--;
    slchild.value = value;
    }
}
function DEforeignadult(){
    let value = parseInt(foreignadult.value);
    if(value>0){
    value--;
    foreignadult.value = value;
    }
}
function DEforeignchild(){
    let value = parseInt(foreignchild.value);
    if(value>0){
    value--;
    foreignchild.value = value;
    }
}
function DEinfant(){
    let value = parseInt(infant.value);
    if(value>0){
    value--;
    infant.value = value;
    }
}

decr.addEventListener("click", DEsladult);
decr1.addEventListener("click", DEslchild);
decr2.addEventListener("click", DEforeignadult);
decr3.addEventListener("click", DEforeignchild);
decr4.addEventListener("click", DEinfant);

//timeslots of the stay
function dur(){
    let durval = duration.value;
    if(durval == "slot1"){
        document.getElementById("s1").innerHTML = `7.00 AM - 8.00 AM`;
        normhr += 1;
    }
    else if(durval == "slot2"){
        document.getElementById("s2").innerHTML = `8.00 AM - 9.00 AM`;
        normhr += 1;
    }else if(durval == "slot3"){
        document.getElementById("s3").innerHTML = `9.00 AM - 10.00 AM`;
        peekhr += 1;
    }else if(durval == "slot4"){
        document.getElementById("s4").innerHTML = `10.00 AM - 11.00 AM`;
        peekhr += 1;}
    else if(durval == "slot5"){
        document.getElementById("s5").innerHTML = `11.00 AM - 12.00 PM`;
        peekhr += 1;}
    else if(durval == "slot6"){
        document.getElementById("s6").innerHTML = `12.00 PM - 1.00 PM`;
        peekhr += 1;}
    else if(durval == "slot7"){
        document.getElementById("s7").innerHTML = `1.00 PM - 2.00 PM`;
        normhr += 1;}
    else if(durval == "slot8"){
        document.getElementById("s8").innerHTML = `2.00 PM - 3.00 PM`;
        normhr += 1;} 
    else if(durval == "slot9"){
        document.getElementById("s9").innerHTML = `3.00 PM - 4.00 PM`;
        peekhr += 1;}
    else if(durval == "slot10"){
        document.getElementById("s10").innerHTML = `4.00 PM - 5.00 PM`;
        peekhr += 1;}
    else if(durval == "slot11"){
        document.getElementById("s11").innerHTML = `5.00 PM - 6.00 PM`;
        peekhr += 1;}
}
duration.addEventListener("change", dur);

//total duration
function ToDura(){
    if(normhr>0){
    document.getElementById("d1").innerHTML = `${normhr} Normal Hours`;}
    if(peekhr>0){
    document.getElementById("d2").innerHTML = `${peekhr} Peak Hours`;}
}
duration.addEventListener("change", ToDura);

//SL adult ammount
function PSLadult(){
    let np = normhr * 4;
    let pp = peekhr * 6;
    let total = np + pp;
    let slad = parseInt(sladult.value);
    toSLadult = total * slad;
    document.getElementById("sladult1").innerHTML = `${toSLadult} USD`;
}
duration.addEventListener("change", PSLadult);
incre.addEventListener("click", PSLadult);
decr.addEventListener("click", PSLadult);

//sl child ammount
function PSLchild(){
    let np = normhr * 2;
    let pp = peekhr * 3;
    let total = np + pp;
    let slch = parseInt(slchild.value);
    toSLchild = total * slch;
    document.getElementById("slchild1").innerHTML = `${toSLchild} USD`;
}
duration.addEventListener("change", PSLchild);
incre1.addEventListener("click", PSLchild);
decr1.addEventListener("click", PSLchild);

//foreigner adult ammount
function PFOREIGNadult(){
    let np = normhr * 10;
    let pp = peekhr * 13;
    let total = np + pp;
    let foad = parseInt(foreignadult.value);
    toFOREIGNadult = total * foad;
    document.getElementById("foreignadult1").innerHTML = `${toFOREIGNadult} USD`;
}
duration.addEventListener("change", PFOREIGNadult);
incre2.addEventListener("click", PFOREIGNadult);
decr2.addEventListener("click", PFOREIGNadult);

//foreigner child ammount
function PFOREIGNchild(){
    let np = normhr * 5;
    let pp = peekhr * 8;
    let total = np + pp;
    let foch = parseInt(foreignchild.value);
    toFOREIGNchild = total * foch;
    document.getElementById("foreignchild1").innerHTML = `${toFOREIGNchild} USD`;
}
duration.addEventListener("change", PFOREIGNchild);
incre3.addEventListener("click", PFOREIGNchild);
decr3.addEventListener("click", PFOREIGNchild);

//infant ammount
function Pinfant(){
    document.getElementById("infant1").innerHTML = `Free`;
}
duration.addEventListener("change", Pinfant);
incre4.addEventListener("click", Pinfant);
decr4.addEventListener("click", Pinfant);

//total ammount
function Ptotal(){
    total = toSLadult + toSLchild + toFOREIGNadult + toFOREIGNchild;
    document.getElementById("total").innerHTML = `${total} USD`;
}
duration.addEventListener("change", Ptotal);
incre.addEventListener("click", Ptotal);
incre1.addEventListener("click", Ptotal);
incre2.addEventListener("click", Ptotal);
incre3.addEventListener("click", Ptotal);
incre4.addEventListener("click", Ptotal);
decr.addEventListener("click", Ptotal);
decr1.addEventListener("click", Ptotal);
decr2.addEventListener("click", Ptotal);
decr3.addEventListener("click", Ptotal);
decr4.addEventListener("click", Ptotal);

//Continue button activation
function ButtonActivation(){
    if(RequirdFullfilled()){
        next.removeAttribute('disabled');
}
}
function RequirdFullfilled(){
    const rfield = form.querySelectorAll('[required]')
    for(const field of rfield){
        if(!field.value.trim()){
            return false;
        }
    }
    return true;   
}
duration.addEventListener('change', ButtonActivation);

//Local Storage
function SaveData(){
    localStorage.setItem('date', currdate.innerText);
    localStorage.setItem('time', t1.innerText);
    localStorage.setItem('duration', t2.innerText);
    localStorage.setItem('sladult', sladult.value);
    localStorage.setItem('slchild', slchild.value);
    localStorage.setItem('foreignadult', foreignadult.value);
    localStorage.setItem('foreignchild', foreignchild.value);
    localStorage.setItem('infant', infant.value);
    localStorage.setItem('currentsladult', document.getElementById("sladult1").innerText);
    localStorage.setItem('currentslchild', document.getElementById("slchild1").innerText);
    localStorage.setItem('currentforeignadult', document.getElementById("foreignadult1").innerText);
    localStorage.setItem('currentforeignchild', document.getElementById("foreignchild1").innerText);
    localStorage.setItem('currentinfant', `Free`);
    localStorage.setItem('totalP', document.getElementById("total").innerText);
}
next.addEventListener("click", SaveData);