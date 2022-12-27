const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearch.querySelector('ol')

const deleteAllBtn = gnbSearchHistory.querySelector(
  '.search-history-header button'
)

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistory)
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
  gnbSearchHistory.classList.remove('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)
deleteAllBtn.addEventListener('click', deleteAllHistory)
