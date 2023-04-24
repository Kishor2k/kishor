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

// navigation link hover animation with respect to sections
// const sections = document.querySelectorAll("section");
// const links = document.querySelectorAll(".nav-menu a");

// const options = {
//   threshold: "0.1",
// };
// const sectionObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       links.forEach((link) => {
//         link.removeAttribute("aria-current");
//         let sectionId = "#" + entry.target.id;
//         let linkId = link.getAttribute("href");
//         if (sectionId === linkId) {
//           let sectionRect = entry.target.getBoundingClientRect();
//           let sectionHeight = entry.target.offsetHeight;
//           let sectionTop = entry.target.offsetTop;
//           const vh = Math.max(
//             document.documentElement.clientHeight || 0,
//             window.innerHeight || 0
//           );
//           console.log(entry.target);
//           console.log(sectionRect.top);
//           console.log(sectionRect.bottom);
//           console.log(sectionHeight);
//           console.log(sectionTop);
//           console.log("vh", vh);

//           if (sectionRect.top < vh) {
//             link.setAttribute("aria-current", "page");
//             console.log("ok");
//           }
//         }
//       });
//     }
//   });
// }, options);
// sections.forEach((section) => {
//   sectionObserver.observe(section);
// });
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
