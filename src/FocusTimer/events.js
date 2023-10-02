import { controls, rightSide } from "./elements.js"
import * as actions from './actions.js'
import { minutes, seconds } from "./elements.js"
import state from "./state.js"
import { updateDisplay } from "./timer.js"

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function') {
      return
    }
    actions[action]()
  })
}

export function registerThemeControls() {
  rightSide.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function') {
      return
    }
    actions[action]()
  })
}

export function setMinutes() {
  minutes.addEventListener('focus', () => {
    minutes.textContent = ''
  })

  minutes.onkeypress = (event) => /\d/.test(event.key)
  
  minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time
    state.minutes = time
    state.seconds = 0
    updateDisplay()
    minutes.removeAttribute('contenteditable')
  })
}
