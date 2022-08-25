//getting references
const txtoutput=document.getElementById("donout");

function submitFunction() {
    let cardno = document.getElementById("cardno").value
    if (cardno =="")
    {
        alert("Something Went Wrong Please Check!!")
        txtoutput.innerText = 'Please Check Your details'
    }
    else{
        alert("You Have Donate Successfully!! Thank You!!")
        txtoutput.innerText = `Successful!! Thankyou For Your Kindness!!`
    }
}

//getting id names 
let txtname = document.getElementById('name');
let txtproduct = document.getElementById('product');
let btnAdd = document.getElementById('add');

//adding event
btnAdd.addEventListener('click',addEntry);

//adding a array
let directore = [];

//the local storage part
if("directore" in localStorage){
    directore = JSON.parse(localStorage.getItem('directore'));
    showEntries();
}

function showEntries(){
    txtproduct.value = "";
    for (let i=0 ; i<directore.length;i++){
        txtproduct.value += directore[i].name + "\t";
    }
}

function addEntry(){
    const entry = {
        "name": txtname.value,
    };
    directore.push(entry);
    localStorage.setItem('directore',JSON.stringify(directore));
    showEntries();
}

//the order favourites part
function clrLocal() {
    localStorage.clear();
    alert ("Thank you for purchasing items!!")
}

//the loyalty points part
//getting the text area
const txtloyalty=document.getElementById("loyalty");

//getting the button
const btnloyalty=document.getElementById("cloy");

//adding a event listner
btnloyalty.addEventListener("click", loyalty);

//creating a function
function loyalty() {
    if (localStorage.length == 1) {
        txtloyalty.innerText = "The User Have 20 Loyalty Points"
    }
    else if (localStorage.length < 1) {
        txtloyalty.innerText = "The User Have 00 Loyalty Points"
    }
}



