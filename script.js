/*
====================================================================================================================================================================================================================================================================
====================================================================================================================================================================================================================================================================
//                                                                     Variables
====================================================================================================================================================================================================================================================================
====================================================================================================================================================================================================================================================================
*/

let tipPercentage = '';
let sum = '';

const billAmount = document.querySelector(".bill-amount");

const tipAmount5 = document.querySelector("#tip-amount-5");
const tipAmount10 = document.querySelector("#tip-amount-10");
const tipAmount15 = document.querySelector("#tip-amount-15");
const tipAmount25 = document.querySelector("#tip-amount-25");
const tipAmount50 = document.querySelector("#tip-amount-50");
const tipAmountCustom = document.querySelector("#tip-amount-custom");

const customInput = document.querySelector(".custom-input");
const customInputBtn = document.querySelector(".custom-input-button");

const peopleAmountLabel = document.querySelector(".people-amount-label");
const peopleAmount = document.querySelector(".people-amount");



const tipPerPerson = document.querySelector("#tip-per-person");
const totalPerPerson = document.querySelector("#total-per-person");

const resetBtn = document.querySelector(".reset-button-inactive");
/*
====================================================================================================================================================================================================================================================================
====================================================================================================================================================================================================================================================================
//                                                             Buttons and Event Listeners
====================================================================================================================================================================================================================================================================
====================================================================================================================================================================================================================================================================
*/

tipAmount5.addEventListener("click", fivePercent);
tipAmount10.addEventListener("click", tenPercent);
tipAmount15.addEventListener("click", fifteenPercent);
tipAmount25.addEventListener("click", twentyFivePercent);
tipAmount50.addEventListener("click", fiftyPercent);

tipAmountCustom.addEventListener("click", customAmount);
customInputBtn.addEventListener("click", customPercent);


peopleAmount.addEventListener("keydown", () => {                        // Number of People Keydown
    if (peopleAmountLabel.hasAttribute("id", "people-amount-zero")) {
        peopleAmountLabel.removeAttribute("id");                         // Change from Red to Cyan
    }
});


/*
====================================================================================================================================================================================================================================================================
====================================================================================================================================================================================================================================================================
//                                                                   Functions
====================================================================================================================================================================================================================================================================
====================================================================================================================================================================================================================================================================
*/


function fivePercent() {
    if (billAmount.value !== '' || billAmount.value !== undefined) {           //if Bill is empty or undefined or NaN
        if (peopleAmount.value == '' || peopleAmount.value == 0) {            //if Number of People is empty
            peopleAmount.value = 0;                                          // Number of People = 0
            tipPerPerson.value = '';
            totalPerPerson.value = '';
            peopleAmount.parentElement.setAttribute("id", "people-amount-zero");  //Number of People { border :Red }
        } else {
            tipPercentage = parseInt(billAmount.value) / 100 * 5 / parseInt(peopleAmount.value);
        tipPerPerson.value = tipPercentage.toFixed(2);

        sum = tipPercentage + parseInt(billAmount.value) / parseInt(peopleAmount.value);
        totalPerPerson.value = sum.toFixed(2);
        resetBtn.setAttribute("id", "reset-button-active");      // Activate Reset Button
        resetBtn.addEventListener("click", resetAll);
        }
    }
};


function tenPercent() {
    if (billAmount.value !== '' || billAmount.value !== undefined) {          //if Bill is empty or undefined or NaN
        if (peopleAmount.value == '' || peopleAmount.value == 0) {           //if Number of People is empty
            peopleAmount.value = 0;                                         // Number of People = 0
            tipPerPerson.value = '';
            totalPerPerson.value = '';
            peopleAmount.parentElement.setAttribute("id", "people-amount-zero");  //Number of People { border :Red }
        } else {
        tipPercentage = parseInt(billAmount.value) / 100 * 10 / parseInt(peopleAmount.value);
        tipPerPerson.value = tipPercentage.toFixed(2);
        
        sum = tipPercentage + parseInt(billAmount.value) / parseInt(peopleAmount.value);
        totalPerPerson.value = sum.toFixed(2);
        resetBtn.setAttribute("id", "reset-button-active");      // Activate Reset Button Color
        resetBtn.addEventListener("click", resetAll);
        }
    }
};


function fifteenPercent() {
    if (billAmount.value !== '' || billAmount.value !== undefined) {          //if Bill is empty or undefined or NaN
        if (peopleAmount.value == '' || peopleAmount.value == 0) {           //if Number of People is empty
            peopleAmount.value = 0;                                         // Number of People = 0
            tipPerPerson.value = '';
            totalPerPerson.value = '';
            peopleAmount.parentElement.setAttribute("id", "people-amount-zero");  //Number of People { border :Red }
        } else {
        tipPercentage = parseInt(billAmount.value) / 100 * 15 / parseInt(peopleAmount.value);
        tipPerPerson.value = tipPercentage.toFixed(2);
        
        sum = tipPercentage + parseInt(billAmount.value) / parseInt(peopleAmount.value);
        totalPerPerson.value = sum.toFixed(2);
        resetBtn.setAttribute("id", "reset-button-active");      // Activate Reset Button Color
        resetBtn.addEventListener("click", resetAll);
        }
    }
};


function twentyFivePercent() {
    if (billAmount.value !== '' || billAmount.value !== undefined) {       //if Bill is empty or undefined or NaN
        if (peopleAmount.value == '' || peopleAmount.value == 0) {        //if Number of People is empty
            peopleAmount.value = 0;                                      // Number of People = 0
            tipPerPerson.value = '';
            totalPerPerson.value = '';
            peopleAmount.parentElement.setAttribute("id", "people-amount-zero");  //Number of People { border :Red }
        } else {
        tipPercentage = parseInt(billAmount.value) / 100 * 25 / parseInt(peopleAmount.value);
        tipPerPerson.value = tipPercentage.toFixed(2);
        
        sum = tipPercentage + parseInt(billAmount.value) / parseInt(peopleAmount.value);
        totalPerPerson.value = sum.toFixed(2);
        resetBtn.setAttribute("id", "reset-button-active");      // Activate Reset Button Color
        resetBtn.addEventListener("click", resetAll);
        }
    }
};

function fiftyPercent() {
    if (billAmount.value !== '' || billAmount.value !== undefined) {      //if Bill is empty or undefined or NaN
        if (peopleAmount.value == '' || peopleAmount.value == 0) {       //if Number of People is empty
            peopleAmount.value = 0;                                     // Number of People = 0
            tipPerPerson.value = '';
            totalPerPerson.value = '';
            peopleAmount.parentElement.setAttribute("id", "people-amount-zero");  //Number of People { border :Red }
        } else {

        tipPercentage = parseInt(billAmount.value) / 100 * 50 / parseInt(peopleAmount.value);
        tipPerPerson.value = tipPercentage.toFixed(2);
        
        sum = tipPercentage + parseInt(billAmount.value) / parseInt(peopleAmount.value);
        totalPerPerson.value = sum.toFixed(2);
        resetBtn.setAttribute("id", "reset-button-active");      // Activate Reset Button Color
        resetBtn.addEventListener("click", resetAll);
        }
    }
};


/*
====================================================================================================================================================================================================================================================================
====================================================================================================================================================================================================================================================================
//                                                                 Custom Button function
====================================================================================================================================================================================================================================================================
====================================================================================================================================================================================================================================================================
*/


function customAmount() {  // Custom Button clicked
    customInput.setAttribute("id", "custom-input");              //display: initial
    customInputBtn.setAttribute("id", "custom-input-button");   //display: initial
    document.querySelector("#custom-input").focus();           //autofocus on input field
}

function customPercent() {  // % Button clicked

    if (billAmount.value !== '' || billAmount.value !== undefined) {  //if Bill is empty or undefined or NaN
        if (peopleAmount.value == '' || peopleAmount.value == 0) {   //if Number of People is empty
            peopleAmount.value = 0;                                 // Number of People = 0
            tipPerPerson.value = '';
            totalPerPerson.value = '';
            peopleAmount.parentElement.setAttribute("id", "people-amount-zero");  //Number of People { border :Red }
        } else {
        
        tipPercentage = parseInt(billAmount.value) / 100 * parseInt(customInput.value) / parseInt(peopleAmount.value);
        tipPerPerson.value = tipPercentage.toFixed(2);

        sum = tipPercentage + parseInt(billAmount.value) / parseInt(peopleAmount.value);
        totalPerPerson.value = sum.toFixed(2);
        resetBtn.setAttribute("id", "reset-button-active");      // Activate Reset Button Color
        resetBtn.addEventListener("click", resetAll);
        }
    }
};


/*
====================================================================================================================================================================================================================================================================
====================================================================================================================================================================================================================================================================
//                                                                   Reset Button function
====================================================================================================================================================================================================================================================================
====================================================================================================================================================================================================================================================================
*/

function resetAll() {
    billAmount.value = '';
    peopleAmount.value = '';
    tipPerPerson.value = '';
    totalPerPerson.value = '';
    customInput.value = '';
    customInput.removeAttribute("id");
    customInputBtn.removeAttribute("id");
    resetBtn.removeAttribute("id");
    resetBtn.removeEventListener("click");
};

/*
====================================================================================================================================================================================================================================================================
====================================================================================================================================================================================================================================================================
//                                                                  Additional Information
====================================================================================================================================================================================================================================================================
====================================================================================================================================================================================================================================================================
*/

/*

        // if (peopleAmount.value == 1) {           //  previous code replaced by {border: red}
        //     peopleAmount.value = '';             //automatically makes an empty Number of People input = 1
        // } else {
        //     peopleAmount.value = peopleAmount.value;
        // };

*/