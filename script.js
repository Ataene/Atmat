const texts = ["permanent", "impression", "forever"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";


(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
        if( letter.length === currentText.length){
            count++;
            index = 0;
        }
        setTimeout(type, 400);
})();

var project = setInterval(projectDone, 10)
var clients = setInterval(happyClients, 10)
var coffee = setInterval(cupsCoffee, 10)
var apple = setInterval(appleCount, 10)

let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;

function projectDone(){

    count1++;
    document.querySelector("#number1").innerHTML = count1;

    if(count1 == 500){
        clearInterval(project) 
    }
}


function happyClients(){

    count2++;
    document.querySelector("#number2").innerHTML = count2;

    if(count2 == 89){
        clearInterval(clients) 
    }
}


function cupsCoffee(){

    count3++;
    document.querySelector("#number3").innerHTML = count3;

    if(count3 == 500){
        clearInterval(coffee) 
    }
}


function appleCount(){

    count4++;
    document.querySelector("#number4").innerHTML = count4;

    if(count4 == 100){
        clearInterval(apple) 
    }
}


const pricePlan = document.querySelectorAll("h2 span.price");

const toggleButton = document.querySelector(".checking");

const updateMyDate = document.querySelector("p span#updateMyDate");

toggleButton.addEventListener("change", myClicked);


function myClicked(){

    if(toggleButton.checked){

        console.log(toggleButton.checked);

        for (let i = 0; i < pricePlan.length; i++){

        let myPricePlan = pricePlan[i].innerHTML;
        
        pricePlan[i].innerHTML = myPricePlan * 2;
        }

    } else if(!toggleButton.checked) {

        for (let i = 0; i < pricePlan.length; i++){

        let myPricePlan = pricePlan[i].innerHTML;

        pricePlan[i].innerHTML = myPricePlan / 2;
        }
    }
}

function getCurrentYear() {
    return new Date().getFullYear();
  };

  document.getElementById("updateMyDate").innerHTML = getCurrentYear();

