const inputDay = document.querySelector("[data-input='day']");
const inputMonth = document.querySelector("[data-input='month']");
const inputYear = document.querySelector("[data-input='year']");
const btn = document.querySelector(".btn-img");

let day = 0;
let month = 0;
let year = 0;

btn.addEventListener("click", calculateAge);
const dataInput = [];

function calculateAge() {
  day = +inputDay.value;
  month = +inputMonth.value;
  year = +inputYear.value;
}
console.log(day, month, year);
