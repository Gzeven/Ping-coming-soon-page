const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("email");
  const text = document.getElementById("text");
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value.match(pattern)) {
    input.value = "";
    text.innerHTML = "Thank you for your interest!";
    text.style.color = "#00FF00";
    input.style.border = "1px solid #00FF00";
    email.classList.remove("placeholderdark");
    email.placeholder = "Your email adress..";
  } else if (email.value == "") {
    input.value = "";
    text.innerHTML = "Whoops! It looks like you forgot to add your email";
    text.style.display = "flex";
    text.style.color = "hsl(354, 100%, 66%)";
    input.style.border = "2px solid hsl(354, 100%, 66%)";
  } else {
    input.value = "";
    email.classList.add("placeholderdark");
    email.placeholder = "example@email.com";
    text.innerHTML = "Please provide a valid email address";
    text.style.display = "flex";
    text.style.color = "hsl(354, 100%, 66%)";
    input.style.border = "2px solid hsl(354, 100%, 66%)";
  }
});
