const drawerMenuBtnList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-button'
)

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
}

drawerMenuBtnList.forEach((button) => {
  button.addEventListener('click', toggleDrawerMenu)
})
