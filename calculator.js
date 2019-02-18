const valueToExchange = document.querySelector('#valueToExchange');

valueToExchange.onchange = () => {
  console.log(event.target.value);
};

const calcRadio = document.querySelector('.calculator__input');

//calcRadio.children[0].children[0].checked = 'true';

// const dateInput = document.createElement('input');
// dateInput.setAttribute('type','date');
// calcRadio.appendChild(dateInput);