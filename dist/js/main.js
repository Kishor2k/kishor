const header = document.querySelector("header");
const menu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
window.addEventListener("scroll", () => {
  if (scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// fade animations
fadeOptions = {
  threshold: 0.4,
};
zoomOptions = {
  rootMargin: "0px 0px -100px 0px",
};
toolOptions = {
  rootMargin: "0px 0px -100px 0px",
};
const slideRight = document.querySelectorAll(".slide-right");
const slideLeft = document.querySelectorAll(".slide-left");
const zoomIn = document.querySelectorAll(".head");
const toolZoom = document.querySelectorAll(".tool-zoom");
const observer = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};

const fadeObserver = new IntersectionObserver(observer, fadeOptions);
const zoomObsserver = new IntersectionObserver(observer, zoomOptions);
const toolObserver = new IntersectionObserver(observer, toolOptions);
for (let tool of toolZoom) {
  const tools = document.querySelectorAll(".tool");
  for (let i = 0; i < tools.length; i++) {
    tools[i].style.transitionDelay = i * 0.1 + "s";
  }
}
for (let client of slideLeft) {
  const clients = document.querySelectorAll(".client");
  for (let i = 0; i < clients.length; i++) {
    clients[i].style.transitionDelay = i * 0.2 + "s";
  }
}
slideRight.forEach((right) => {
  fadeObserver.observe(right);
});
slideLeft.forEach((left) => {
  fadeObserver.observe(left);
});
zoomIn.forEach((zoom) => {
  zoomObsserver.observe(zoom);
});
toolZoom.forEach((tool) => {
  toolObserver.observe(tool);
});

const navigatorArrow = document.querySelector(".navigator-arrow");
let arrowIcon = document.querySelector(".arrow-icon");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 1.2) {
    arrowIcon.setAttribute("name", "chevron-up-outline");
  } else {
    arrowIcon.setAttribute("name", "chevron-down-outline");
  }
});
navigatorArrow.addEventListener("click", () => {
  window.scrollBy(0, window.innerHeight - 200);
  if (window.scrollY > window.innerHeight * 1.2) {
    window.scrollBy(0, -window.scrollY);
  }
});

// form validation
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
const form = document.querySelector("#form");
const formBtn = document.querySelector("#form-btn");

formBtn.addEventListener("click", () => {
  // e.preventDefault();
  validateInputs();
});

function setError(element, message = "This field is required") {
  let formRow = element.parentNode;
  let error = formRow.querySelector("p");
  formRow.classList.add("error");
  formRow.classList.remove("success");
  error.innerText = message;
}
function setSuccess(element) {
  let formRow = element.parentNode;
  let error = formRow.querySelector("p");
  error.innerText = "";
  formRow.classList.remove("error");
  formRow.classList.add("success");
}
function validateInputs() {
  let nameVal = name.value;
  let emailVal = email.value.trim();
  let msgVal = msg.value;
  let regex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  if (nameVal === null || nameVal === "") {
    setError(name);
  } else {
    setSuccess(name);
  }
  if (emailVal === null || emailVal === "") {
    setError(email);
  } else {
    setSuccess(email);
  }
  if (!regex.test(emailVal)) {
    setError(email, "Enter a valid mail");
  } else {
    setSuccess(email);
  }

  if (msgVal === null || msgVal === "") {
    setError(msg);
  } else {
    setSuccess(msg);
  }
}
