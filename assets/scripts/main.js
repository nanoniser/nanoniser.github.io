// Author: Spandan Anupam
// Year: 2021
// GitHub: https://github.com/surelynottrue

var hasVScroll = null;

document.addEventListener('DOMContentLoaded', function () {
  hasVScroll = document.body.scrollHeight > document.body.clientHeight;
});

function setVw() {
  let vw = document.documentElement.clientWidth / 100;
  if (hasVScroll) {
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }
  else {
    document.documentElement.style.setProperty('--vw', `1vw`);
  }
}

setVw();
window.addEventListener('resize', setVw);
