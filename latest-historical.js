const loadingBlock = document.querySelectorAll('.loading');


//Request function
let createResponseList = (requestUrl, createdUl, newLi, classNewLi) =>{
    Object.keys(loadingBlock).forEach(item => {
        loadingBlock[item].style='display:block;';
    });
    fetch(requestUrl).then(response => {
        return response.json()
    })
        .then(data => {
            Object.keys(data.rates).forEach((item) => {
                const newLi = document.createElement('li');
                newLi.className = classNewLi;
                newLi.textContent = (`${item} ${data.rates[item]}`);
                createdUl.appendChild(newLi);
            });
            Object.keys(loadingBlock).forEach(item => {
                loadingBlock[item].style='display:none;';
            });
        });
};


let deleteChilds = (parent,child) => {
    if ((parent.querySelectorAll(child).length)>0){
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }
};


//Functional for 2nd tab
const btn = document.getElementById('latest__btn');
const latestRatesResult = document.querySelector('.latest__rates-result');
const latestRatesUl = document.createElement('ul');
latestRatesUl.className='latest__rates-ul';
latestRatesResult.appendChild(latestRatesUl);
btn.onclick = function(){
    deleteChilds(latestRatesUl,'li');
    createResponseList('https://api.exchangeratesapi.io/latest',latestRatesUl,li,'latest__result-li');
};


//Functional for 3st tab
const inputDate = document.querySelector('#input__date');
const resultDiv = document.querySelector('.historical__rates-result');
const ul = document.createElement('ul');
const li = document.createElement('li');
ul.className = 'result-list';
resultDiv.appendChild(ul);
const resultList = document.querySelector('.result-list');

inputDate.onchange =function () {
    deleteChilds(resultList,'li');
    createResponseList(`https://api.exchangeratesapi.io/${event.target.value}`,ul,li,'result-li');
};

