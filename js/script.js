const inputs = document.querySelectorAll("[data-input]");

const btn = document.querySelector(".btn-img");
const resultYears = document.querySelector('[data-result="year"]');
const resultMonth = document.querySelector('[data-result="month"]');
const resulDays = document.querySelector('[data-result="days"]');
const cardsDate = document.querySelectorAll(".card-date");

let day = 0;
let month = 0;
let year = 0;
let visibleMessage = false;

btn.addEventListener("click", validateinputs);

function validateinputs() {
  inputs.forEach((input) => {
    if (input.value === "" && !visibleMessage) {
      const span = document.createElement("span");
      input.after(span);
      span.innerText = "Esse campo é requerido.";
      span.className = `${input.dataset.input}`;
    }
    if (input.value !== "" && visibleMessage) {
      const elementDelet = document.querySelector(`.${input.dataset.input}`);
      elementDelet.innerHTML = "";
    }
    console.log(visibleMessage);
  });
  visibleMessage = true;
}

/* function calculateAge() {
  const age = new Date().getFullYear() - year;
  resultYears.innerText = age;
} */
