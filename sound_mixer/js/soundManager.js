
export class SoundManager {
  constructor(){
    this.audioElements = new Map()
    this.isPlaying = false
    console.log("Sound manager created");
    
  }

  // load sound file
  loadSound(soundId,filePath){
    try {
      const audio = new Audio()
      audio.src = filePath
      audio.loop = true
      audio.preload = 'metadata'

      // add sound to audio element
      this.audioElements.set(soundId,audio)
      return true
    } catch (error) {
      console.log(`Failed to load sound ${soundId}`)
      return false
    }
  }

  // play a specific sound
  async playSound(soundId){
    const audio = this.audioElements.get(soundId)

    if(audio){
      try {
        await audio.play()
        console.log(`Playing ${soundId}`)
      } catch (error) {
        console.error(`Failed to play ${soundId}`, error)
        return false
      }
    }
  }

  // pause a specific sound
  pauseSound(soundId){
    const audio = this.audioElements.get(soundId)

    if(audio && !audio.paused){
      audio.pause()
      console.log(`Paused: ${soundId}`)
    }
  }

  // set volume for a specific sound from 0 to 100
  setVolume(soundId,volume){
    const audio = this.audioElements.get('soundId')

    if(!audio){
      console.log(`Sound: ${soundId} not found`)
      return false
    }

    // convert 0-100, to 0-1
    audio.volume = volume / 100
    console.log(`Volume for ${soundId}: ${volume}`)
    return true
  }
}