const eventTimeDisplay = document.getElementById("event-time-display")
const timeWords = document.getElementById("time-words")
// const rocket = document.getElementById("rocket")

const liftoffTime = new Date("October 21 2022 7:23");

const timer = setInterval(function() {    
  const currentTime = new Date();
  const diff = (liftoffTime - currentTime)

  const seconds = diff / 1000
  const wholeSeconds = Math.floor(seconds % 60)

  const minutes = seconds / 60 
  const wholeMinutes = Math.floor(minutes % 60)

  const hours = minutes / 60 
  const wholeHours = Math.floor(hours % 60)

  const days = hours / 24
  const wholeDays = Math.floor(days % 24)

  const years = days / 365
  const wholeYears = Math.floor(days % 365)

  eventTimeDisplay.innerText = `${wholeYears}:${wholeDays}:${wholeHours}:${wholeMinutes}:${wholeSeconds}`

  timeWords.innerText = `${wholeYears ? "Years" : ""} ${wholeDays ? "Days" : ""} ${wholeHours ? "Hours" : ""} ${wholeMinutes ? "Minutes" : ""} 
  ${wholeSeconds ? "Seconds" : ""}`
}, 1000)