const tipButtons = document.querySelectorAll(".tip-btn");

if (tipButtons) {
  tipButtons.forEach((tipButton) => {
    tipButton.addEventListener("click", () => {
      toggleClass(tipButtons, tipButton, "active");
    });
  });
}

function toggleClass(list, element, className) {
  list.forEach((item) => {
    item.classList.remove(className);
  });

  element.classList.add(className);
}
