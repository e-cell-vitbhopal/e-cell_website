// Simple sound synthesis using Web Audio API
// No external assets required

const audioContext = new (window.AudioContext || window.webkitAudioContext)()

export const initAudio = () => {
    if (audioContext.state === 'suspended') {
        audioContext.resume().then(() => {
            console.log('Audio context resumed successfully')
        }).catch(e => console.error('Audio resume failed', e))
    }
}

const checkContext = () => {
    if (audioContext.state === 'suspended') {
        audioContext.resume().catch(() => { })
    }
}

const playTone = (freq, type, duration, volume = 0.1) => {
    checkContext()

    const osc = audioContext.createOscillator()
    const gain = audioContext.createGain()

    osc.type = type
    osc.frequency.setValueAtTime(freq, audioContext.currentTime)

    gain.gain.setValueAtTime(volume, audioContext.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)

    osc.connect(gain)
    gain.connect(audioContext.destination)

    osc.start()
    osc.stop(audioContext.currentTime + duration)
}

export const playClick = () => {
    // Short, high tick
    playTone(800, 'sine', 0.05, 0.05)
}

export const playTap = () => {
    // Softer tap
    playTone(600, 'sine', 0.05, 0.05)
}

export const playSuccess = () => {
    // Rising arpeggio
    const now = audioContext.currentTime
    const osc1 = audioContext.createOscillator()
    const osc2 = audioContext.createOscillator()
    const gain = audioContext.createGain()

    osc1.frequency.setValueAtTime(523.25, now) // C5
    osc2.frequency.setValueAtTime(659.25, now + 0.1) // E5

    gain.gain.setValueAtTime(0.1, now)
    gain.gain.linearRampToValueAtTime(0, now + 0.4)

    osc1.connect(gain)
    osc2.connect(gain)
    gain.connect(audioContext.destination)

    osc1.start(now)
    osc1.stop(now + 0.1)

    osc2.start(now + 0.1)
    osc2.stop(now + 0.4)
}

export const playError = () => {
    // Low buzzer
    playTone(150, 'sawtooth', 0.3, 0.1)
}

export const playPhaseChange = () => {
    checkContext()
    // Magical shimmer
    const now = audioContext.currentTime
    const gain = audioContext.createGain()
    gain.gain.setValueAtTime(0.05, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1)
    gain.connect(audioContext.destination)

    const frequencies = [440, 554, 659, 880] // A major
    frequencies.forEach((freq, i) => {
        const osc = audioContext.createOscillator()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, now + (i * 0.05))
        osc.connect(gain)
        osc.start(now + (i * 0.05))
        osc.stop(now + 1)
    })
}

export const playFanfare = () => {
    checkContext()
    // Celebratory Fanfare (C Major: C G C E)
    const now = audioContext.currentTime
    const gain = audioContext.createGain()
    gain.gain.setValueAtTime(0.1, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2)
    gain.connect(audioContext.destination)

    // Notes: C4, G4, C5, E5, G5
    const notes = [261.63, 392.00, 523.25, 659.25, 783.99]
    const times = [0, 0.15, 0.3, 0.6, 0.8] // Staggered delays

    notes.forEach((freq, i) => {
        const osc = audioContext.createOscillator()
        osc.type = 'triangle' // Brass-like
        osc.frequency.setValueAtTime(freq, now + times[i])
        osc.connect(gain)
        osc.start(now + times[i])
        osc.stop(now + 2)
    })
}
