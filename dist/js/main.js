const header = document.querySelector('header');
const menu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
window.addEventListener('scroll', () => {
  if (scrollY > 100) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// navigation link hover animation with respect to sections
// const sections = document.querySelectorAll('section');
// const links = document.querySelectorAll('.nav-menu a');

// const options = {
//   threshold: '0.1',
// };
// const sectionObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       links.forEach((link) => {
//         link.removeAttribute('aria-current');
//         let sectionId = '#' + entry.target.id;
//         let linkId = link.getAttribute('href');
//         if (sectionId === linkId) {
//           let sectionRect = entry.target.getBoundingClientRect();
//           let sectionHeight = entry.target.offsetHeight;
//           let sectionTop = entry.target.offsetTop;
//           console.log(entry.target);
//           console.log(sectionRect.top);
//           console.log(sectionRect.bottom);
//           console.log(sectionHeight);
//           console.log(sectionTop);

//           link.setAttribute('aria-current', 'page');
//         }
//       });
//     }
//   });
// }, options);
// sections.forEach((section) => {
//   sectionObserver.observe(section);
// });
