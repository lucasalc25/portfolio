const burguerMenuBtn = document.querySelector('#burguer-cont')
const smallMenu = document.querySelector('.small-menu')
const headerBurguerMenuBtn = document.querySelector('.burguer-menu')
const headerBurguerMenuCloseBtn = document.querySelector('.burguer-menu-close')
const headerSmallMenuLinks = document.querySelectorAll('.small-menu-link')

burguerMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('small-menu--active')) {
    smallMenu.classList.remove('small-menu--active')
  } else {
    smallMenu.classList.add('small-menu--active')
  }
  if (headerBurguerMenuBtn.classList.contains('display-none')) {
    headerBurguerMenuBtn.classList.remove('display-none')
    headerBurguerMenuCloseBtn.classList.add('display-none')
  } else {
    headerBurguerMenuBtn.classList.add('display-none')
    headerBurguerMenuCloseBtn.classList.remove('display-none')
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('small-menu--active')
    headerBurguerMenuBtn.classList.remove('display-none')
    headerBurguerMenuCloseBtn.classList.add('display-none')
  });
}

// ---
const logoContainer = document.querySelector('#logo-container')

logoContainer.addEventListener('click', () => {
  location.href = '/'
});