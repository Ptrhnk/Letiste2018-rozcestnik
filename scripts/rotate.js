<!--
var x, z,
  n = 0,
  m = 0,
  rotINT,
  right = true
  currentAngle = 0,
  newAngle = 0;
//
function toggleRotate() {
  x = document.getElementById("rotateToggle")
  y = document.getElementById("rotateClock")
  clearInterval(rotINT)
  rotINT = setInterval("startRotate()", 1)
}

function startRotate() {
  n = n + 1

  x.style.transform = "rotate(" + n + "deg)"
  x.style.webkitTransform = "rotate(" + n + "deg)"
  x.style.OTransform = "rotate(" + n + "deg)"
  x.style.MozTransform = "rotate(" + n + "deg)"

  if (n == 90 || n == 180 || n == 270 || n == 360) {
    clearInterval(rotINT)
    right = true;
    if (n >= 360) {
      n = 0
    }
  }
}

function clockTime() {
  y = document.getElementById("rotateClock")
  clearInterval(rotINT)
  newAngle = m + Math.floor(Math.random() * 180) + 10;
  rotINT = setInterval("clockTick()", 1)
}

function clockTick() {
  m = m + 1
  y.style.transform = "rotate(" + m + "deg)"
  y.style.webkitTransform = "rotate(" + m + "deg)"
  y.style.OTransform = "rotate(" + m + "deg)"
  y.style.MozTransform = "rotate(" + m + "deg)"

  if(m == newAngle) {
    clearInterval(rotINT)
      if (m >= 360) {
        m = m - 360
      }
  }
}
//-->
