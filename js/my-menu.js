const myMenu = document.querySelector('.my-menu')
const myMenuBtn = document.querySelector('.my-menu-button')

function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeOnClickOutside)
  }
  myMenu.classList.toggle('is-active')
}

function closeOnClickOutside(e) {
  console.log('ss')
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeOnClickOutside)
  }
}

myMenuBtn.addEventListener('click', toggleMyMenu)
