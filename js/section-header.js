const sectionHeaderIconBtn = document.querySelector(
  '.product-shipment .product-section-header.sm-only .icon-button'
)

function showSection() {
  const section = this.parentNode.parentNode
  section.classList.add('is-open')
}

sectionHeaderIconBtn.addEventListener('click', showSection)
