
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
}