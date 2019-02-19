//Request function
let valueToExchange = 1;
const resultData = document.getElementById('calculator__result-data');

const requestExchange = (date,base,symbols,converteValue) => {
    Object.keys(loadingBlock).forEach(item => {
        loadingBlock[item].style='display:block;';
    });
    fetch(`https://api.exchangeratesapi.io/${date}?base=${base}`).then(response => {
        return response.json();
    })
        .then(data => {
            //console.log(data.rates);
            console.log(data.rates[symbols]);
            resultData.textContent = converteValue * data.rates[symbols].toFixed(1);
            Object.keys(loadingBlock).forEach(item => {
                loadingBlock[item].style='display:none;';
            });
        });
};


const calcRadio = document.querySelector('.calculator__input');
const currentCourseRadio = document.getElementById('currentCourse');
const courseForDateRadio = document.querySelector('#courseForDate');
const dateBlock = document.querySelector('.date__block');


const date = new Date();
let dateForUrl = `${date.getFullYear()}-${date.getMonth()}1-${date.getDate()}`;

currentCourseRadio.onchange = () => {
    deleteChilds(dateBlock,'input');
    if (event.target.checked) {
        dateForUrl = `${date.getFullYear()}-${date.getMonth()}1-${date.getDate()}`;
        requestExchange(dateForUrl,currencyFromValue,currencyToValue,valueToExchange);
        console.log(dateForUrl);
    }
};

const dateInput = document.createElement('input');

courseForDateRadio.onchange = () => {
    if (event.target.checked) {
        dateInput.className = 'dateInput';
        dateInput.setAttribute('type', 'date');
        dateBlock.appendChild(dateInput);
    }
};

dateInput.onchange = () => {
    dateForUrl = event.target.value;
    requestExchange(dateForUrl,currencyFromValue,currencyToValue,valueToExchange);
    console.log(dateForUrl);
};



// valueToExchange - This is the value we will convert in the future
const inputToExchange = document.querySelector('#valueToExchange');
inputToExchange.onchange = () => {
    valueToExchange = event.target.value;
    console.log(valueToExchange);
    requestExchange(dateForUrl,currencyFromValue,currencyToValue,valueToExchange);
};


// Functional for obtaining the values ​​of both currencies
const currencyFromOption = document.querySelector('#currencyFrom');
const currencyToOption = document.querySelector('#currencyTo');

let currencyFromValue = 'USD';
let currencyToValue = 'RUB';

currencyFromOption.onchange = () => {
    currencyFromValue = event.target.value;

    requestExchange(dateForUrl,currencyFromValue,currencyToValue,valueToExchange);
    console.log(currencyFromValue);
};

currencyToOption.onchange = () => {
    currencyToValue = event.target.value;

    requestExchange(dateForUrl,currencyFromValue,currencyToValue,valueToExchange);
    console.log(currencyToValue);
};




//requestExchange(dateForUrl,currencyFromValue,currencyToValue,valueToExchange);