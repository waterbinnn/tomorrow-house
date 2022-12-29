const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearch.querySelector('ol')

const deleteAllBtn = gnbSearchHistory.querySelector(
  '.search-history-header button'
)

const deleteItemBtnList =
  gnbSearchHistoryList.querySelectorAll('.delete-button')

function removeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistory)
}

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    removeGnbSearchHistory()
  }
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length > 0) {
    if (!gnbSearchHistory.classList.contains('is-active')) {
      window.addEventListener('click', closeGnbSearchHistory)
    }
    gnbSearchHistory.classList.add('is-active')
  }
}

function deleteAllHistory() {
  gnbSearchHistoryList.innerHTML = ''
  removeGnbSearchHistory()
}

function deleteSearchHistoryItem(e) {
  e.stopPropagation()
  const ItemToDelete = this.parentNode
  gnbSearchHistoryList.removeChild(ItemToDelete)
  if (gnbSearchHistoryList.children.length === 0) {
    removeGnbSearchHistory()
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)
deleteAllBtn.addEventListener('click', deleteAllHistory)

deleteItemBtnList.forEach((button) => {
  button.addEventListener('click', deleteSearchHistoryItem)
})
