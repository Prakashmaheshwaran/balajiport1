var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*50);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

function scrolldiv() {
  var elem = document.getElementById("my");
  elem.scrollIntoView();
}
function scrolldive() {
  var elema = document.getElementById("twoo");
  elema.scrollIntoView();
}

gsap.to(".l1", {rotation: 360, duration: 2,repeat: -1});
gsap.to(".r1", {rotation: 360, duration: 2,repeat: -1});
gsap.to(".l2", {rotation: -360, duration: 2,repeat: -1});
gsap.to(".r2", {rotation: -360, duration: 2,repeat: -1,Delay:0});


var tl = gsap.timeline({Delay: 0.2});
tl.to(".l1", {x: 30, duration: 1});
tl.to(".r1", {x: -30, duration: 0.5});
tl.to(".l2", {x: 50, duration: 0.5});
tl.to(".r2", {x: -50, duration: 0.5});




gsap.to(".square1", {rotation:"random([360])", duration: 4,repeat: -1});
gsap.to(".square2", {rotation:"random([-360])", duration: 4,repeat: -1});
gsap.to(".s1", {rotation: 360,x:"random([450, 650])", duration: 6,repeat: -1});
gsap.to(".s2", {rotation: 360,x:"random([-450, -650])", duration: 6,repeat: -1});
