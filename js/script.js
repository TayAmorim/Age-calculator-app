const inputs = document.querySelectorAll("[data-input]");

const btn = document.querySelector(".btn-img");

const cardsDateText = document.querySelectorAll(".card-date-text");
const containerCards = document.querySelector(".container-cards");
const spanErro = document.createElement("span");

const yearActual = new Date().getFullYear();
const monthActual = new Date().getMonth() + 1;
const dayActual = new Date().getDate();

const resultYears = document.querySelector('[data-result="year"]');
const resultMonth = document.querySelector('[data-result="months"]');
const resulDays = document.querySelector('[data-result="days"]');

const inputDay = document.querySelector('[data-input="day"]');
const inputMonth = document.querySelector('[data-input="month"]');
const inputyear = document.querySelector('[data-input="year"]');

let day = 0;
let month = 0;
let year = 0;

let monthClear;
let monthDay;

const calendarMonths = [
  undefined,
  31,
  28,
  31,
  31,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

const visibleMessage = {
  day: false,
  month: false,
  year: false,
};
btn.addEventListener("click", validateEmptyField);

function validateEmptyField() {
  day = 0;
  month = 0;
  year = 0;
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const inputValue = input.value;
    const cardText = cardsDateText[i];
    const nameInput = input.dataset.input;
    const span = document.createElement("span");
    span.className = `${input.dataset.input}`;

    if (inputValue === "" && !visibleMessage[`${nameInput}`]) {
      input.classList.add("erro");
      cardText.classList.add("erro");
      input.after(span);
      span.innerText = "Esse campo é requerido.";

      visibleMessage[`${nameInput}`] = true;
    }
    if (inputValue && visibleMessage[`${nameInput}`]) {
      const elementDelet = document.querySelector(`.${input.dataset.input}`);
      input.classList.remove("erro");
      cardText.classList.remove("erro");
      elementDelet.innerHTML = "";
      visibleMessage[`${nameInput}`] = false;
    }
    if (inputValue) {
      if (input.dataset.input === "day") {
        day = inputValue;
      }
      if (input.dataset.input === "month") {
        month = inputValue;
      }
      if (input.dataset.input === "year") {
        year = inputValue;
      }
    }
  }
  if (day && month && year) {
    clearInputValue();
  }
}

function clearInputValue() {
  if (month >= 1 && month <= 9) {
    monthClear = month.toString().replace("0", "");
  } else if (month >= 10 && month <= 12) {
    monthClear = month;
  } else {
    inputMonth.after(spanErro);
    spanErro.innerText = "mês  inválido";
  }
  monthDay = calendarMonths[`${+monthClear}`];
  validateDate(monthDay);
}

function validateDate() {
  spanErro.innerText = "";

  if (day > monthDay) {
    inputDay.after(spanErro);
    spanErro.innerText = "Dia errado";
  }

  if (year > yearActual) {
    inputyear.after(spanErro);
    spanErro.innerText = "Ano inválido";
  }
  calculateAge(monthDay);
}

function calculateAge() {
  let age = yearActual - year;
  let ageMonths;
  let ageYears = Math.abs(day - dayActual);
  const existAge = age || ageMonths || ageYears;

  if (month > monthActual) {
    ageMonths = Math.abs(month - 12) + monthActual;
    age = yearActual - year - 1;
    if (day == dayActual) {
      ageYears = 0;
    }
    if (day < dayActual) {
      ageYears = Math.abs(day - dayActual);
    }
    if (day > dayActual) {
      ageMonths = Math.abs(month - 12) + monthActual - 1;
      ageYears = Math.abs(day - dayActual - monthDay);
    }
  }

  if (month <= monthActual) {
    ageMonths = Math.abs(month - monthActual);
    if (day == dayActual) {
      ageYears = 0;
    }
    if (day < dayActual) {
      ageYears = Math.abs(day - dayActual);
    }
    if (day > dayActual) {
      ageMonths = monthActual - month - 1;
      ageYears = Math.abs(day - dayActual - monthDay);
    }
    if (ageMonths === undefined) {
      ageMonths = 0;
    }
  }

  resultYears.innerText = age;
  resultMonth.innerText = ageMonths;
  resulDays.innerText = ageYears;
}
