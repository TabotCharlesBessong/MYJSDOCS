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
      this.setupEventListeners()
      // load all sound
      this.loadAllSounds()
      this.isInitialized = true
    } catch (error) {
      console.error("Failed to initialize app",error)
    }
  }

  // setup all event listerners
  setupEventListeners(){
    // handle all clicks with event delegation
    document.addEventListener('click',async (e) => {
      // check if play button was clicked
      if(e.target.closest('.play-btn')){
        const soundId = e.target.closest('.play-btn').dataset.sound
        // console.log(soundId)
        // toogle sound
        await this.toggleSound(soundId)
      }
    })

    // handle volume slider changes
    document.addEventListener('input',(e) => {
      if(e.target.classList.contains('volume-slider')){
        const soundId = e.target.dataset.sound
        const volume = parseInt(e.target.value)
        // set volume
        this.soundManager.setVolume(soundId,volume)
        console.log(`Set volume for ${soundId} to ${volume}`)
        // update UI
        this.ui.updateVolumeDisplay(soundId,volume)
      }
    })
  }

  // toggle individual sounds
  async toggleSound(soundId){
    const audio = this.soundManager.audioElements.get(soundId)

    if(!audio){
      console.error(`Sound ${soundId} not found`)
      return false
    }

    if (audio.paused){
      // get current slider value
      const card = document.querySelector(`[data-sound="${soundId}"]`)
      const slider = card.querySelector('.volume-slider')
      const volume = parseInt(slider.value)

      // if slider is at 0, then defualt to 50%
      if(volume === 0){
        this.soundManager.setVolume(soundId,20)
        this.ui.updateVolumeDisplay(soundId,20)
      }
      // sound is off, turn it on
      this.soundManager.setVolume(soundId,volume)
      await this.soundManager.playSound(soundId)

      // @todo - update play button
      this.ui.updateSoundPlayButton(soundId,true)
    } else {
      // sound is on, shut it off
      this.soundManager.pauseSound(soundId)
      // @todo - update play button
      this.ui.updateSoundPlayButton(soundId,false)
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

  // set sound volume
  setSoundVolume(soundId,volume){
    const success = this.soundManager.setVolume(soundId,volume)
    if(success){
      this.ui.updateVolumeDisplay(soundId,volume)
    }
  }
}i

document.addEventListener('DOMContentLoaded',() => {
  const app = new AmbientMixer()
  app.init()

  // make app available for testing in browser
  window.app = app
})