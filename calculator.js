const valueToExchange = document.querySelector('#valueToExchange');

valueToExchange.onchange = () => {
  console.log(event.target.value);
};

const calcRadio = document.querySelector('.calculator__input');
const currentCourseRadio = document.getElementById('currentCourse');
const courseForDateRadio = document.getElementById('courseForDate');

console.log(currentCourseRadio);
console.log(courseForDateRadio.checked);

currentCourseRadio.onchange = () => {
  console.log(event.target.value);
};

courseForDateRadio.onchange = () => {
  if(event.target.checked){

  }
};

//calcRadio.children[0].children[0].checked = 'true';

// const dateInput = document.createElement('input');
// dateInput.setAttribute('type','date');
// calcRadio.appendChild(dateInput);