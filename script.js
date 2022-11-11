const newYears = '1 Jan 2023'

function countDown(){
  const currentDate = new Date()
  const newyearDate = new Date(newYears)
   let totalseconds = (newyearDate - currentDate)/1000
  const days = Math.floor(totalseconds / 3600 / 24)
  const hours = Math.floor(totalseconds / 3600 ) % 24
  const min = Math.floor(totalseconds / 60) % 60
  const seconds = Math.floor(totalseconds % 60)
   console.log(days,hours,min,seconds) 
}

function totlaTime(time){
  return time < 10 ? `0 ${time}` : time;
}
setInterval(countDown,1000)
countDown()