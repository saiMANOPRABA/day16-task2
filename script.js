let div = document.createElement("div")
div.setAttribute("class","container")

let f =document.createElement("form");
f.setAttribute("id","forms");

let header = document.createElement("h2")
header.setAttribute("class","head")
header.innerHTML="Enter Your Details"
f.append(header)

//This is for First Name:
let firstdiv = document.createElement("div")
firstdiv.setAttribute("class","fn")
let lab = document.createElement("label");
lab.innerHTML="First Name";
let inp = document.createElement("input")
inp.setAttribute("type","text")
inp.setAttribute("id","first");
inp.setAttribute("placeholder","Enter Your Name")
firstdiv.append(lab,inp)
f.append(firstdiv)

//this is For Last Name
let secdiv = document.createElement("div");
secdiv.setAttribute("class","fn")
let lab1 = document.createElement("label");
lab1.innerHTML="Last Name";
let inp1 = document.createElement("input")
inp1.setAttribute("type","text")
inp1.setAttribute("id","last");
inp1.setAttribute("placeholder","Enter your last Name")
secdiv.append(lab1,inp1)
f.append(secdiv)

//this is for address:
let adrsdiv = document.createElement("div");
adrsdiv.setAttribute("class","adrs");
let lab2 = document.createElement("label");
lab2.innerHTML="Address";
let inp2 = document.createElement("textarea");
inp2.setAttribute("id","add");
inp2.setAttribute("placeholder","Enter Your Address")
adrsdiv.append(lab2,inp2)
f.append(adrsdiv)

//this is for pincode:
let pindiv = document.createElement("div");
pindiv.setAttribute("class","fn")
let lab3 = document.createElement("label");
lab3.innerHTML="Pincode";
let inp3 = document.createElement("input")
inp3.setAttribute("type","text")
inp3.setAttribute("placeholder","Enter Your Pincode")
inp3.setAttribute("id","pin")
pindiv.append(lab3,inp3)
f.append(pindiv)

//this is for Gender:
let gender = document.createElement("div");
gender.setAttribute("class","gendr")
let lab4 = document.createElement("label");
lab4.innerHTML="Gender:";
let sel = document.createElement("select")
sel.setAttribute("id","gen");
let opt= document.createElement("option")
opt.innerHTML="Select";
let opt1= document.createElement("option")
opt1.innerHTML="male";
let opt2= document.createElement("option")
opt2.innerHTML="female";
sel.append(opt,opt1,opt2)

//this is for food:
// let foodiv = document.createElement("div")
// foodiv.setAttribute("class","gendr")
let lab5 = document.createElement("label");
lab5.innerHTML="Food:";
let sel1 = document.createElement("select");
sel1.setAttribute("id","foo"); 
let food= document.createElement("option")
food.innerHTML="Select";
let food1= document.createElement("option")
food1.innerHTML="briyani";
let food2= document.createElement("option")
food2.innerHTML="Meals";
let food3= document.createElement("option")
food3.innerHTML="Fried Rice";
let food4= document.createElement("option")
food4.innerHTML="Noodles";
let food5= document.createElement("option")
food5.innerHTML="Dosa";

sel1.append(food,food1,food2,food3,food4,food5)
gender.append(lab4,sel,lab5,sel1)
f.append(gender)


//this is for State:
let state = document.createElement("div");
state.setAttribute("class","fn")
let lab6 = document.createElement("label");
lab6.innerHTML="State:";
let inp6 = document.createElement("input")
inp6.setAttribute("type","text")
inp6.setAttribute("id","state")
state.append(lab6,inp6)
f.append(state)


//this is for Country:
let country = document.createElement("div");
country.setAttribute("class","fn")
let lab7 = document.createElement("label");
lab7.innerHTML="Country:";
let inp7 = document.createElement("input")
inp7.setAttribute("type","text")
inp7.setAttribute("id","country");

let br7 = document.createElement("br")
country.append(lab7,inp7,br7)
f.append(country)

let button = document.createElement("div");
button.setAttribute("class","btn1")
let btn = document.createElement("button")
btn.setAttribute("class","btn")
btn.innerHTML="Submit"
button.append(btn)
f.append(button)

div.append(f)
document.body.appendChild(div)


let fname = document.getElementById("first");
let lname = document.getElementById("last");
let adrs = document.getElementById("add");
let pinc = document.getElementById("pin");
let gendr = document.getElementById("gen");
let stat = document.getElementById("state");
let county= document.getElementById("country")
let foo = document.getElementById("foo");


let div1 = document.createElement("div");
    div1.setAttribute("class","div1")

    let table = document.createElement("table");
    table.setAttribute("class","tabl");
    let tr1  = document.createElement("tr")
    let th1 = document.createElement("th")
    th1.innerHTML="First Name";
    let th2 = document.createElement("th");
    th2.innerHTML="Last Name";
    let th3 = document.createElement("th");
    th3.innerHTML="Address";
    let th4 = document.createElement("th");
    th4.innerHTML="Pincode";
    let th5 = document.createElement("th");
    th5.innerHTML="Gender";
    let th6 = document.createElement("th");
    th6.innerHTML="Food";
    let th7 = document.createElement("th");
    th7.innerHTML="State";
    let th8 = document.createElement("th");
    th8.innerHTML="Country";
 
    tr1.append(th1,th2,th3,th4,th5,th6,th7,th8);
    table.append(tr1)

let form = document.getElementById("forms");

form.addEventListener("submit",function(event){
    event.preventDefault()
 

   
    

    let tr2= document.createElement("tr")
    let th9= document.createElement("td")
    th9.innerHTML= fname.value;
    let th10 = document.createElement("td");
    th10.innerHTML = lname.value;
    let th11= document.createElement("td")
    th11.innerHTML=adrs.value;
    let th12 = document.createElement("td");
    th12.innerHTML=pinc.value;
    let th13 = document.createElement("td")
    th13.innerHTML= gendr.value;
    let th14 = document.createElement("td")
    th14.innerHTML= foo.value;
    let th15 = document.createElement("td")
    th15.innerHTML=stat.value;
    let th16 = document.createElement("td")
    th16.innerHTML=county.value;


    tr2.append(th9,th10,th11,th12,th13,th14,th15,th16)
    table.append(tr2)
    div1.append(table)
    document.body.append(div1)
})