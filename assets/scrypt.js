var timerElement = document.querySelector(".timer-count");

var question = document.querySelector(".question");
var option_a = document.querySelector(".option_a");
var option_b = document.querySelector(".option_b");
var option_c = document.querySelector(".option_c");
var option_d = document.querySelector(".option_d");

var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");

var array_qstns = ["q1","q2","q3"];
var array_opt_a = ["1a","2a","3a"];
var array_opt_b = ["1b","2b","3b"];
var array_opt_c = ["1c","2c","3c"];
var array_opt_d = ["1d","2d","3d"];


var qstn_num = 0;
var timer;
var timerCount;
option_a.classList.add("option_e");

question.textContent = "Komillia";
option_a.textContent = "Snella A";
correct.textContent = "Wanto";
incorrect.textContent = "wantox2";
correct.textContent = "wantox3";

var option_e = document.querySelector(".option_e");
option_e.textContent = "EEEE";

timerCount = 99;


function dispQuestion() {
  question.textContent = array_qstns[qstn_num];
  option_a.textContent = array_opt_a[qstn_num];
  option_b.textContent = array_opt_b[qstn_num];
  option_c.textContent = array_opt_c[qstn_num];
  option_d.textContent = array_opt_d[qstn_num];
}

function review_answer(){
  console.log("testA")
}

function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
    }, 1000);
  }

  option_a.addEventListener("click",review_answer);
  option_b.addEventListener("click",review_answer);
  option_c.addEventListener("click",review_answer);
  option_d.addEventListener("click",review_answer);