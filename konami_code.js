const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index = 0

function init() {
 document.body.addEventListener('keydown', function(e) {
  let i = 0
  for (i; i < codes.length; i++) {
    if (codes[i] === e.key) {
      i++;
    }
    else {
      alert()
    }
  }

 });
}
