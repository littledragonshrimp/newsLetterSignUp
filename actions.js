const emailInput = document.querySelector("input[type='email']");
const submitBtn = document.querySelector(".subBtn");
const success = document.querySelector(".successPop");

const full = document.querySelector(".fullHero");
const content = document.querySelector(".content");
const main = document.querySelector("main");



const errorSign = document.querySelector(".errorSign");

const dismissBtn = document.getElementById("dismissBtn");
const filledEmail = document.querySelector(".filledEmail");

function isValidEmail(email) {
  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//adds error class if email is invalid OR displays success
 submitBtn.addEventListener("click", () => {
  const email = emailInput.value;
  if (isValidEmail(email)) {
    success.style.display = "flex";
    filledEmail.innerHTML = email;
    content.classList.add("gone");
    main.classList.add("disappearBackground");
    full.classList.add("gone") //makes main content disappear on desktop
    
  } else {
    emailInput.classList.add("error");
    errorSign.style.display ="block";
    console.log("Please provide a valid email address");
  }
 });

 //removes .error class when user starts typing
  emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains("error")) {
    emailInput.classList.remove("error");
    errorSign.style.display ="none";
  }
});


//removes .gone
dismissBtn.addEventListener("click", () => {
  success.style.display = "none";
  if (content.classList.contains("gone")) {
    content.classList.remove("gone");
    full.classList.remove("gone");
    main.classList.remove("disappearBackground");
  }
});