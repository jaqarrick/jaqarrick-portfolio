//TODO
//DEFINE WINDOW HEIGHT AND WIDTH ON RESIZE, SO THAT THE BPM SPAN CAN BE PROPORTIONAL 
//TO THE SIZE OF THE WINDOW

//ADAPT FOR MOBILE USE WITH UNIQUE MOBILE EVENT HANDLERS

// let windowHeight, windowWidth

// const updateWindow = () => {
//   windowWidth = window.innerWidth
//   windowHeight = window.innerHeight
//   console.log(windowHeight, windowWidth)
// }

// updateWindow()

// window.addEventListener("resize", () => {
//   updateWindow()
// })


let transportStarted = false
let transport = Tone.Transport
transport.bpm.value = 150
let counter = 0
let beatCounter = 0
const synths = []

const container = document.querySelector("#container")
const svg = document.querySelector("#svg")

let x, y, gy, by, gx, bx, fr, midi, r

//mousemove function
svg.addEventListener("mousemove", (e)=>{
  console.log("hello")
  x = e.clientX
  y = e.clientY
  draw(x,y,1)
  changeColor(x, y)
  playGlide(x,y)
})


//draw function
function draw(x,y,r){
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
  circle.setAttribute("cx", x)
  circle.setAttribute("cy", y)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", "white")
  if(r>1){
    circle.classList.add("big-circle")
    circle.setAttribute("data-counter", beatCounter)
  }
  svg.appendChild(circle)
}

//background color function
function changeColor(x,y){
  gy = ((-1)*y/5)+200
  by = ((-1)*y/5)+200
  gx = x/10
  bx = x/10
  svg.setAttribute("style", `background-color: rgba(255,${gy},${by+bx},1)`)
}

changeColor(50,50)
//add Tone elements 
//when y is high - higher fr

const masterLimiter = new Tone.Limiter().toMaster()
const glideEffectsRack = {
  delay: new Tone.PingPongDelay ({wet:0.6}).connect(masterLimiter),
}


const glideVolume = new Tone.Volume({volume:-20})
const glideLimiter = new Tone.Limiter({threshold: 0}).connect(glideEffectsRack.delay)
const glideSynth = new Tone.FMSynth({
  volume : -2,
  harmonicity : 1 ,
  modulationIndex : 2 ,
  detune : 0 ,
  oscillator : {
  type : "sine"
  } ,
  envelope : {
  attack : 0.01 ,
  decay : 0.01 ,
  sustain : 1 ,
  release : 3
  } ,
  modulation : {
  type : "square",
  modulationFrequency: 300
  } ,
  modulationEnvelope : {
  attack : 0.1 ,
  decay : 0 ,
  sustain : 0.9 ,
  release : 3
  }
}).chain(glideVolume, glideLimiter)



function playGlide(x,y){
  midi = Math.floor((-1*y/20)) + 90
  bpm = x/3.5 +40
  transport.bpm.rampTo(bpm, 1)
  fr = Tone.Frequency(midi, 'midi') 
  glideSynth.triggerAttackRelease(fr, 0.1)
}


svg.addEventListener("click", ()=>{
  draw(x,y,20)
  const limiter = new Tone.Limiter({threshold: -20}).connect(masterLimiter)
  const volume = new Tone.Volume({volume: -20}).connect(limiter)
  const synth = new Tone.FMSynth({
    release: 0.1
  }).connect(volume)
  synths.push({
    synth: synth,
    frequency: fr,
  })
  beatCounter = synths.length
  transport.timeSignature = beatCounter/4

  if(!transportStarted){
    transport.bpm.value
    transport.start()
    loop.start(0)
  }
})

const changeCircleColor = (counter) => {
  let allCircles = document.querySelectorAll(".big-circle")
  allCircles.forEach(circle => {
    let circleCounter = Number(circle.getAttribute("data-counter"))
    if(circleCounter === counter){
      circle.style.fill = "yellow"
    } else {
      circle.style.fill= "whitesmoke"
    }

  })
}
const playSynths = (time) => {
  counter=(counter+1)%beatCounter
  let currentSynth = synths[counter]
  currentSynth.synth.triggerAttackRelease(currentSynth.frequency, '4n', time)
  changeCircleColor(counter)

}

let loop = new Tone.Loop(playSynths, '4n')













