const dataSetUri = document.querySelector('#screen').getAttribute('data-presentation-uri') || null
const markdownUri = dataSetUri || localStorage.getItem('current-presentation-uri') || ''
let currentPresentation = localStorage.getItem('current-presentation') || ''
currentPresentation = JSON.parse(currentPresentation)

const createSlides = (markdown) => {
  let splits = markdown.split("\n#")
  let slides = []
  splits.forEach(slide => {
    if (slide) {
      slides.push('<div class="slide" tabindex="0">'+marked('#'+slide)+'</div>')
    }
  })
  return slides.join('')
}

const initializePresentation = (data) => {
  //let presentation = matter(data)
  let presentation = {
    content: data
  }
  return presentation
}

const loadPresentationFromUri = (options = {}) => {
  return axios.get(`${options.uri}`)
}

const renderSlides = (slides) => {
  let slideActiveIndex = 0
  slides.forEach((slide, index) => {
    slide.style.display = (index == slideActiveIndex) ? 'block' : 'none'
    slide.addEventListener('keyup', (el) => {
      let keyCode = el.keyCode || el.which
      //console.log('slides', keyCode, slideActiveIndex)
      if (keyCode == 38) {
        slideActiveIndex = (slideActiveIndex > 0) ? slideActiveIndex-1 : slideActiveIndex
      } else if (keyCode == 40) {
        slideActiveIndex = (slideActiveIndex < slides.length-1) ? slideActiveIndex+1 : slideActiveIndex
      }
      slide.style.display = 'none'
      slides[slideActiveIndex].style.display = 'block'
      slides[slideActiveIndex].focus()
    })
  })
}

// MAIN SCRIPT

let offlineMessage = ''
let markup = ''

offlineMessage = createSlides(document.querySelector('#offline-markup').innerHTML)

if (currentPresentation) {
  console.log(currentPresentation)
  document.querySelector('#screen').innerHTML = createSlides(currentPresentation.content)
  document.querySelector('#style').innerHTML = ''
  document.querySelector('#screen').setAttribute('data-type', 'presentation')
  renderSlides(document.querySelectorAll('#screen .slide'))
}

// if (markdownUri) {
//   loadPresentationFromUri({uri: markdownUri}).then(result => {
//     let presentation = initializePresentation(result.data)
//     console.log(presentation)
//     document.querySelector('#screen').innerHTML = createSlides(presentation.content)
//     document.querySelector('#style').innerHTML = ''
//     document.querySelector('#screen').setAttribute('data-type', 'presentation')
//     renderSlides(document.querySelectorAll('#screen .slide'))
//   }).catch(error => {
//     console.log("ERROR: " + error + " (URL was " + markdownUri + ")")
//   })
// }

// document.querySelector('#screen').innerHTML = offlineMessage
// document.querySelector('#style').innerHTML = ''
// document.querySelector('#screen').setAttribute('data-type', 'presentation')
// renderSlides(document.querySelectorAll('#screen .slide'))
