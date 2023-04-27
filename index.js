import './index.css'
import JS_IMAGE from './assets/JavaScript.png'

console.log('Hello World!')

const h1 = document.createElement(`h1`)
h1.className = `h1-header`
h1.textContent = `I love JavaScript`

const jsImageHTML = document.createElement(`img`)
jsImageHTML.className = `js-image`
jsImageHTML.src = JS_IMAGE

document.body.append(h1, jsImageHTML)
