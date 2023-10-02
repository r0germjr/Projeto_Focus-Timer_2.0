import state from "./state.js"
import * as timer from './timer.js'
import { forestThemeText, rainThemeText, coffeeThemeText, fireThemeText, minutes, seconds } from "./elements.js"
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.timeIsRunning = document.documentElement.classList.toggle('running')
  timer.countdown()
}

export function reset() {
  state.timeIsRunning = false
  document.documentElement.classList.remove('running')
}

export function set() {
  minutes.setAttribute('contenteditable', true)
  minutes.focus()
}

export function add5Min() {
  state.minutes += 5
  timer.updateDisplay(state.minutes, 0)
}

export function subtracts5Min() {
  state.minutes >= 5 ? state.minutes -= 5 : state.minutes = 0
  timer.updateDisplay(state.minutes, 0)
}

export function toggleForestTheme() {
  resetAllThemesText()
  removeBg()
  pauseAllThemeAudios()
  state.rainMode = false
  state.coffeeMode = false
  state.fireMode = false
  state.forestMode = !state.forestMode
  const forestText = state.forestMode ? 'ativado' : 'desativado'
  forestThemeText.textContent = `Tema floresta ${forestText}`
  if(state.forestMode) {
    sounds.forestAudio.play()
    document.documentElement.classList.toggle('forest-bg')
    return
  }
  sounds.forestAudio.pause()
}

export function toggleRainTheme() {
  resetAllThemesText()
  removeBg()
  pauseAllThemeAudios()
  state.forestMode = false
  state.coffeeMode = false
  state.fireMode = false
  state.rainMode = !state.rainMode
  const rainText = state.rainMode ? 'ativado' : 'desativado'
  rainThemeText.textContent = `Tema chuva ${rainText}`
  if(state.rainMode) {
    sounds.rainAudio.play()
    document.documentElement.classList.toggle('rain-bg')
    return
  }
  sounds.rainAudio.pause()
}

export function toggleCoffeeTheme() {
  resetAllThemesText()
  removeBg()
  pauseAllThemeAudios()
  state.forestMode = false
  state.rainMode = false
  state.fireMode = false
  state.coffeeMode = !state.coffeeMode
  const coffeeText = state.coffeeMode ? 'ativado' : 'desativado'
  coffeeThemeText.textContent = `Tema café ${coffeeText}`
  if(state.coffeeMode) {
    sounds.coffeeAudio.play()
    document.documentElement.classList.toggle('coffee-bg')
    return
  }
  sounds.coffeeAudio.pause()
}

export function toggleFireTheme() {
  resetAllThemesText()
  removeBg()
  pauseAllThemeAudios()
  state.forestMode = false
  state.rainMode = false
  state.coffeeMode = false
  state.fireMode = !state.fireMode
  const fireText = state.fireMode ? 'ativado' : 'desativado'
  fireThemeText.textContent = `Tema lareira ${fireText}`
  if(state.fireMode) {
    sounds.fireAudio.play()
    document.documentElement.classList.toggle('fire-bg')
    return
  } 
  sounds.fireAudio.pause()
}

function resetAllThemesText() {
  forestThemeText.textContent = 'Ativar tema floresta'
  rainThemeText.textContent = 'Ativar tema chuva'
  coffeeThemeText.textContent = 'Ativar tema cafeteria'
  fireThemeText.textContent = 'Ativar tema lareira'
}

function removeBg() {
  document.documentElement.classList.remove('forest-bg', 'rain-bg', 'coffee-bg', 'fire-bg')
}

function pauseAllThemeAudios() {
  sounds.forestAudio.pause()
  sounds.rainAudio.pause()
  sounds.coffeeAudio.pause()
  sounds.fireAudio.pause()
}