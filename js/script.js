const inputs = document.querySelectorAll("[data-input]");

const btn = document.querySelector(".btn-img");
const resultYears = document.querySelector('[data-result="year"]');
const resultMonth = document.querySelector('[data-result="month"]');
const resulDays = document.querySelector('[data-result="days"]');
const cardsDateText = document.querySelectorAll(".card-date-text");

let day = 0;
let month = 0;
let year = 0;

const months = [undefined, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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
    validateDate();
  }
}

function validateDate() {
  if (month >= 1 && month <= 9) {
    let monthClear = month.toString().replace("0", "");
    const monthDay = months[`${+monthClear}`];
    if (day > monthDay) {
      console.log("data errada");
    }
  } else if (month >= 10 && month <= 12) {
    const monthDay = months[`${+month}`];
    if (day > monthDay) {
      console.log("data errada");
    }
  }
}

/* function calculateAge() {
  const age = new Date().getFullYear() - year;
  resultYears.innerText = age;
} */
