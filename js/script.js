const inputs = document.querySelectorAll("[data-input]");

const btn = document.querySelector(".btn-img");
const resultYears = document.querySelector('[data-result="year"]');
const resultMonth = document.querySelector('[data-result="month"]');
const resulDays = document.querySelector('[data-result="days"]');
const cardsDateText = document.querySelectorAll(".card-date-text");

let day = 0;
let month = 0;
let year = 0;

const visibleMessage = {
  day: false,
  month: false,
  year: false,
};
btn.addEventListener("click", validateinputs);

function validateinputs() {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const cardText = cardsDateText[i];
    const nameInput = input.dataset.input;
    const span = document.createElement("span");
    if (input.value === "" && !visibleMessage[`${nameInput}`]) {
      input.classList.add("erro");
      cardText.classList.add("erro");
      input.after(span);
      span.innerText = "Esse campo é requerido.";
      span.className = `${input.dataset.input}`;
      visibleMessage[`${nameInput}`] = true;
    }
    if (input.value !== "") {
      const elementDelet = document.querySelector(`.${input.dataset.input}`);
      input.classList.remove("erro");
      cardText.classList.remove("erro");
      elementDelet.innerHTML = "";
      visibleMessage[`${nameInput}`] = false;
    }
  }
  inputs.forEach((input) => {});
}

/* function calculateAge() {
  const age = new Date().getFullYear() - year;
  resultYears.innerText = age;
} */
