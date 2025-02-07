let userSeq = [];
let gameSeq = [];
let btnColor = ["red", "green", "yellow", "purple"];
let level = 0;
let started = false;
let body = document.querySelector("body");
body.addEventListener("keypress", function () {
  setTimeout(function () {
    if (started == false) {
      level++;
      started = true;
      levelup();
      let Rind = Math.floor(Math.random() * 3);
      let Rcolor = btnColor[Rind];
      let btn = document.querySelector(`.${Rcolor}`);
      flash(btn);
      gameSeq.push(`${Rcolor} box`);
    }
  }, 300);
});

let btns = document.querySelectorAll(".box");

for (btn of btns) {
  btn.addEventListener("click", function (event) {
    //console.dir(event.target);
    if (started == true) {
      let id = event.target.id;
      let btn = document.querySelector(`#${id}`);
      userSeq.push(btn.className);
      flash(btn);

      setTimeout(function () {
        if (check()) {
          if (userSeq.length == gameSeq.length) gameFlash();
        } else {
          let h3 = document.querySelector("h3");
          h3.innerText = "Game Over! Press any key to Restart... ";
          let score = document.createElement("h3");
          score.innerHTML = `<b>YOUR SCORE WAS : </b>${level - 1}`;
          h3.appendChild(score);

          body.style.backgroundColor = "red";
          setTimeout(function () {
            body.style.backgroundColor = "white";
          }, 500);

          userSeq = [];
          gameSeq = [];
          level = 0;
          started = false;
        }
      }, 1000);
    }
  });
}
function gameFlash() {
  level++;
  let h3 = document.querySelector("h3");
  h3.innerText = `Level ${level}`;
  let Rind = Math.floor(Math.random() * 3);
  let Rcolor = btnColor[Rind];
  let btn = document.querySelector(`.${Rcolor}`);
  gameSeq.push(`${Rcolor} box`);
  flash(btn);
  userSeq = [];
}
function check() {
  let index = userSeq.length - 1;
  if (userSeq[index] == gameSeq[index]) return true;
  userSeq = [];
  return false;
}
function levelup() {
  let h3 = document.querySelector("h3");
  h3.innerText = `Level ${level}`;
}

function flash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(function () {
    btn.classList.remove("gameFlash");
  }, 600);
}
