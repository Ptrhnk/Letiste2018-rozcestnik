
<!--
var x,y,n=0,ny=0,rotINT,rotYINT
function rotateDIV()
{
x=document.getElementById("rotate2D")
clearInterval(rotINT)
rotINT=setInterval("startRotate()",1)
}
//
function startRotate() {
  n=n+1
  x.style.transform="rotate(" + n + "deg)"
  x.style.webkitTransform="rotate(" + n + "deg)"
  x.style.OTransform="rotate(" + n + "deg)"
  x.style.MozTransform="rotate(" + n + "deg)"
  if (n==90 || n==180 || n==270 || n==360) {
    clearInterval(rotINT)
      if (n==360) {n=0}
  }
}
//
function rotateYDIV() {
  y=document.getElementById("rotate3D")
  clearInterval(rotYINT)
  rotYINT=setInterval("startYRotate()",10)
}
//
function startYRotate()
{
ny=ny+1
y.style.transform="rotateY(" + ny + "deg)"
y.style.webkitTransform="rotateY(" + ny + "deg)"
y.style.OTransform="rotateY(" + ny + "deg)"
y.style.MozTransform="rotateY(" + ny + "deg)"
if (ny==180 || ny>=360) {
  clearInterval(rotYINT)
    if (ny>=360){ny=0}
  }
}
//-->
