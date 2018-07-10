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
 
    if (codes[i] === e.key) {
      i++;
      
    }
      else if (i = codes.length)  {
        alert("Hurray!");
        i = 0
      }
    }
    else {
      i = 0;
    }
  

 });
}
