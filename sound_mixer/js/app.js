import {sounds,defaultPresets} from "./soundData.js"
import { SoundManager } from "./soundManager.js"
import { UI } from "./ui.js"

class AmbientMixer {
  // initialize deps
  constructor(){
    this.soundManager = new SoundManager()
    this.ui = new UI()
    this.presetManager = null
    this.timer = null
    this.currentSoundState = {}
    this.isInitialized = false
  }

  init(){
    try {
      // initialize UI
      this.ui.init()

      // render sounds cards using sound data
      this.ui.renderSoundCards(sounds)
      // this.soundManager.loadSound('rain','../audio/rain.mp3')
      // load all sound
      this.loadAllSounds()
      this.isInitialized = true
    } catch (error) {
      console.error("Failed to initialize app",error)
    }
  }

  // load all sound files
  loadAllSounds(){
    sounds.forEach((sound) => {
      const audioUrl = `../audio/${sound.file}`
      const success = this.soundManager.loadSound(sound.id,audioUrl)
      if(!success){
        console.warn(`could not load sound: ${sound.name} from ${audioUrl}`)
      }
    })
  }
}

document.addEventListener('DOMContentLoaded',() => {
  const app = new AmbientMixer()
  app.init()

  // make app available for testing in browser
  window.app = app
})