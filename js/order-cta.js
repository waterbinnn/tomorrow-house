const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkBtn, orderCtaBuyBtn] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderCtaBuyBtn.addEventListener('click', openOrderModal)
orderModalOverlay.addEventListener('click', closeOrderModal)

function toggleOrderCtaBookmark() {
  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))

  let newCount = count

  if (this.classList.contains('is-active')) {
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
  } else {
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    newCount = newCount + 1
  }
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
  countSpan.innerHTML = newCount.toLocaleString()

  this.classList.toggle('is-active')
}

orderCtaBookmarkBtn.addEventListener('click', toggleOrderCtaBookmark)
