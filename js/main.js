var clock = document.getElementById('clock');
var hex = document.getElementById('hex');
var container = document.getElementById('container');

function timer() {
  var datetime = new Date();
  var hrs = datetime.getHours().toString();
  var min = datetime.getMinutes().toString();
  var sec = datetime.getSeconds().toString();

  if (hrs.length < 2) {
    hrs = `0${hrs}`
  }
  if (min.length < 2) {
    min = `0${min}`
  }
  if (sec.length < 2) {
    sec = `0${sec}`
  }

  var hexValue = `#${hrs}${min}${sec}`

  clock.innerHTML = `${hrs}:${min}:${sec}`
  hex.innerHTML = `${hexValue}`
  container.style.background = `${hexValue}`
}

timer()
setInterval(timer, 1000)
