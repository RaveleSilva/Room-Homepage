const menuHamburger = document.querySelector('.menu-hamburger')
console.log(menuHamburger)

function activateMenuMobile(){
  const navLinks = document.querySelector('.nav-links')
  menuHamburger.classList.toggle('active')
  navLinks.classList.toggle('active')
}

menuHamburger.addEventListener('click', activateMenuMobile)

