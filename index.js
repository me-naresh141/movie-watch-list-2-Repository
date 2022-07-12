function moviewatcjlist() {
  let rootUl = document.querySelector(`ul`)
  let searchBox = document.querySelector(`input[type="text"]`)
  searchBox.classList.add('searchBox')
  let allMovies = []

  function handleDelete(e) {
    let parent = e.target.parentElement
    let firstChildId = parent.firstElementChild.id
    allMovies.splice(firstChildId, 1)
    createUI()
  }
  // handleCheck
  function handleCheck(e) {
    let chk = allMovies[e.target.id]
    chk.watched = e.target.checked
  }
  // createUI
  function createUI() {
    rootUl.innerHTML = ``
    allMovies.forEach((obj, index) => {
      let li = document.createElement(`li`)
      li.dataset.id = index
      let checkBox = document.createElement(`input`)
      checkBox.classList.add('checkBox')
      checkBox.setAttribute(`type`, `checkBox`)
      checkBox.id = index
      checkBox.addEventListener(`change`, handleCheck)
      let label = document.createElement(`label`)
      label.setAttribute(`for`, `${index}`)
      label.innerText = obj.name
      let closeBtn = document.createElement(`span`)
      closeBtn.innerText = `❌`
      closeBtn.addEventListener(`click`, handleDelete)
      li.append(checkBox, label, closeBtn)
      rootUl.append(li)
    })
  }
  // add movie
  function addMovie(e) {
    let movie = e.target.value
    if (e.keyCode === 13 && !e.target.value == ``) {
      let obj = {}
      obj.name = movie
      obj.watched = false
      allMovies.push(obj)
      e.target.value = ``
      createUI()
    }
  }

  searchBox.addEventListener(`keyup`, addMovie)
}
moviewatcjlist()
