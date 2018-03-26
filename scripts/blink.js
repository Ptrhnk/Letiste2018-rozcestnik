var l, e, t, i, hacek, tt, hacek_;

function blinkRandom() {
  var interval = setInterval("showLetter()", 300);
}

function showLetter(letter) {
  l = document.getElementById("l");
  e = document.getElementById("e");
  t = document.getElementById("t");
  i = document.getElementById("i");
  hacek = document.getElementById("hacek");
  tt = document.getElementById("tt");
  hacek_ = document.getElementById("hacek_");

  var charArr = [l, e, t, i, hacek, tt, hacek_];
  var letter = charArr[Math.floor(Math.random() * charArr.length)];

  setTimeout(function() {
    letter.style.visibility = "visible";
      setTimeout(function() {
        letter.style.visibility = "hidden";
    }, Math.floor(Math.random() * 800) + 100);
  }, Math.floor((Math.random() * 5000) + 300));
}
