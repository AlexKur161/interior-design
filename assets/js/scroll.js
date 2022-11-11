const anchors = document.querySelectorAll('.move-center')
anchors.forEach( anchor =>{
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substring(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
})
const anchorsStart = document.querySelectorAll('.move-start')
anchorsStart.forEach( anchor2 =>{
  anchor2.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID2 = anchor2.getAttribute('href').substring(1)
    document.getElementById(blockID2).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})