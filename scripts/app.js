const buttons = document.querySelector(".buttons");
const counter = document.getElementById("counter");
let counterValue = +counter.textContent;

const updateHTML = (color, value) => {
  counter.style.color = color;
  counter.textContent = value;
};

const checkCounter = value => {
  let color;

  if(value > 0)
    color = "#0f0";
  else if(value < 0)
    color = "#f00";
  else 
    color = "#fff";

  updateHTML(color, value);
};

buttons.addEventListener("click", e => {
  let text = e.target.innerText;

  if(text === "Subtract")
    counterValue--;

  if(text === "Reset")
    counterValue = 0;

  if(text === "Add")
    counterValue++;

  checkCounter(counterValue);
})