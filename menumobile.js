const menuHamburger = document.querySelector('.menu-hamburger')
console.log(menuHamburger)

function activateMenu(){
  const navUl = document.querySelector('nav ul')
  const shadow = document.querySelector('#shadow')

  menuHamburger.classList.toggle('active')
  navUl.classList.toggle('active')
  shadow.classList.toggle('active')
}

menuHamburger.addEventListener('click', activateMenu)