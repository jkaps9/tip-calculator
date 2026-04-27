const tipButtons = document.querySelectorAll(".tip-btn");
const inputBill = document.querySelector("input#bill");
const inputCustomTip = document.querySelector("input#customTip");
const inputNumPeople = document.querySelector("input#numPeople");
const resetButton = document.querySelector(".reset-btn");

const tipPerPerson = document.querySelector("#tipPerPerson");
const totalPerPerson = document.querySelector("#totalPerPerson");

let tipPercentage = 0;
let billAmount = 0;
let numPeople = 0;

function toggleClass(list, element, className) {
  list.forEach((item) => {
    item.classList.remove(className);
  });

  element.classList.add(className);
}

function setTipPercentage(percentage) {
  tipPercentage = percentage;
}

function calculateTip() {
  if (billAmount > 0) {
    return billAmount * (tipPercentage / 100);
  } else {
    return -1;
  }
}

function setTotals(tipAmount, totalAmount) {
  tipPerPerson.textContent = `$${tipAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  totalPerPerson.textContent = `$${totalAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

tipButtons?.forEach((tipButton) => {
  tipButton.addEventListener("click", () => {
    toggleClass(tipButtons, tipButton, "active");
  });
});

resetButton?.addEventListener("click", () => {
  setTotals(0, 0);
});
