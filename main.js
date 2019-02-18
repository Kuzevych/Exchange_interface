

let deleteChildrens = (parent,child) => {
    if ((parent.querySelectorAll(child).length)>0){
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild)
        }
    }
};

const inputDate = document.querySelector('#input__date');
const resultDiv = document.querySelector('.historical__rates-result');

const ul = document.createElement('ul');
ul.className = 'result-list';
resultDiv.appendChild(ul);
const resultList = document.querySelector('.result-list');

inputDate.onchange =function () {
    deleteChildrens(resultList,'li');
    fetch(`https://api.exchangeratesapi.io/${event.target.value}`).then(response => {
        return response.json()
    })
        .then(data => {
            Object.keys(data.rates).forEach((item) => {
                const li = document.createElement('li');
                li.className = 'result-li';
                li.textContent = (`${item} ${data.rates[item]}`);
                ul.appendChild(li);
            });
        });
};


const latestRatesResult = document.querySelector('.latest__rates-result');
const latestRatestUl = document.createElement('ul');
latestRatestUl.className='latest__rates-ul';
latestRatesResult.appendChild(latestRatestUl);
window.onload = function(){
    fetch('https://api.exchangeratesapi.io/latest').then(response => {
        return response.json()
    })
        .then(data => {
            Object.keys(data.rates).forEach((item) => {
                const li = document.createElement('li');
                li.className = 'latest__result-li';
                li.textContent = (`${item} ${data.rates[item]}`);
                latestRatestUl.appendChild(li);
            });
        });
}