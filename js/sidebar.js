const sidebarMenuBtn = document.querySelector('.gnb-icon-button.is-menu')
const sideBar = document.querySelector('.sidebar')
const sideBarOverlay = document.querySelector('.overlay')

const openSidebar = () => {
  sideBar.classList.add('is-active')
  sideBarOverlay.classList.add('is-active')
}

const closeSidebar = () => {
  sideBar.classList.remove('is-active')
  sideBarOverlay.classList.remove('is-active')
}

sidebarMenuBtn.addEventListener('click', openSidebar)
sideBarOverlay.addEventListener('click', closeSidebar)
