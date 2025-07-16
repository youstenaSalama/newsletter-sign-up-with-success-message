const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");

const errorMsg = document.createElement("p");
errorMsg.textContent = "Valid email required";
errorMsg.classList.add("error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
  const existingError = form.querySelector(".error-message");
  if (existingError) existingError.remove();

  if (emailValue === "" || !isValidEmail) {
    emailInput.classList.add("error");
    form.appendChild(errorMsg);
  } else {
    emailInput.classList.remove("error");
    card_1.classList.add("hide");
    card_2.classList.remove("hide");

    const successText = card_2.querySelector("p");
    successText.innerHTML = `A confirmation email has been sent to <strong>${emailValue}</strong>. Please open it and click the button inside to confirm your subscription.`;
  }
});
