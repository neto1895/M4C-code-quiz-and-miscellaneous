var start_Q = document.querySelector(".StartQ");
var timerElement = document.querySelector(".timer-count");
var question = document.querySelector(".question");
var option_a = document.querySelector(".option_a");
var option_b = document.querySelector(".option_b");
var option_c = document.querySelector(".option_c");
var option_d = document.querySelector(".option_d");
var correctans = document.querySelector(".correct");
var incorrectans = document.querySelector(".incorrect");
var array_qstns = ["q1","q2","q3"];
var array_opt_a = ["1a","2a","3a"];
var array_opt_b = ["1b","2b","3b"];
var array_opt_c = ["1c","2c","3c"];
var array_opt_d = ["1d","2d","3d"];
var correct_answer = ["b","c","a"];
var qstn_num = 0;
var user_answer = [];
var timer;
var timerCount;
var save_score;

timerCount = 75;

function go_high_scores_page(){
  document.querySelector(".high-scores-page").classList.remove("d-none");
  document.querySelector(".question").classList.add("d-none");
  document.querySelector(".btn-group-vertical").classList.add("d-none");
  document.querySelector(".correct-mark").classList.add("d-none");
  document.querySelector(".incorrect-mark").classList.add("d-none");
  document.querySelector(".user_score").classList.add("d-none");
  document.querySelector(".input-group").classList.add("d-none");
  start_Q.classList.add("d-none");
}
function reset(){
  disabled_btn()
  resetx2();
  setTimeout(undisabled_btn,1002);
  setTimeout(resetx2,1002);
}

function resetx2(){
  clearInterval(timer);
  qstn_num = 0;
  user_answer = [];
  timer = undefined;
  timerCount = 75;
  save_score = undefined;
  document.querySelector(".high-scores-page").classList.add("d-none");
  document.querySelector(".question").classList.add("d-none");
  document.querySelector(".btn-group-vertical").classList.add("d-none");
  document.querySelector(".correct-mark").classList.add("d-none");
  document.querySelector(".incorrect-mark").classList.add("d-none");
  document.querySelector(".times_up").classList.add("d-none");
  document.querySelector(".user_score").classList.add("d-none");
  document.querySelector(".input-group").classList.add("d-none");
  start_Q.classList.remove("d-none");
  timerElement.textContent = "--";
  correctans.textContent = "";
}

function start_game_display(){
  document.querySelector(".high-scores-page").classList.add("d-none");
  document.getElementById("container2").classList.remove("d-none");
  document.querySelector(".question").classList.remove("d-none");
  document.querySelector(".btn-group-vertical").classList.remove("d-none");
  document.querySelector(".correct-mark").classList.add("d-none");
  document.querySelector(".incorrect-mark").classList.add("d-none");
  document.querySelector(".times_up").classList.add("d-none");
  document.querySelector(".user_score").classList.add("d-none");
  document.querySelector(".input-group").classList.add("d-none");
  start_Q.classList.add("d-none");
  correctans.textContent = "";
}

function times_up(){
  document.querySelector(".high-scores-page").classList.add("d-none");
  document.querySelector(".question").classList.add("d-none");
  document.querySelector(".btn-group-vertical").classList.add("d-none");
  document.querySelector(".correct-mark").classList.add("d-none");
  document.querySelector(".incorrect-mark").classList.add("d-none");
  document.querySelector(".times_up").classList.remove("d-none");
  document.querySelector(".user_score").classList.add("d-none");
  document.querySelector(".input-group").classList.add("d-none");
  start_Q.classList.add("d-none");

  correctans.textContent = "Time's Up!";
  
  setTimeout(go_high_scores_page,1000);

}


function hide_options(){
  document.querySelector(".btn-group-vertical").classList.add("d-none");
}

function show_again(){
  document.querySelector(".btn-group-vertical").classList.remove("d-none");
  document.querySelector(".correct-mark").classList.add("d-none");
  document.querySelector(".incorrect-mark").classList.add("d-none");
  correctans.textContent = "";
  incorrectans.textContent = "";
}

function show_user_score(){
  document.querySelector(".user_score").classList.remove("d-none");
  document.querySelector(".input-group").classList.remove("d-none");
}

function disabled_btn(){
  option_a.setAttribute("disabled","");
  option_b.setAttribute("disabled","");
  option_c.setAttribute("disabled","");
  option_d.setAttribute("disabled","");
  start_Q.setAttribute("disabled","");
  document.querySelector(".high-scores-btn").setAttribute("disabled","");
  document.querySelector(".upload_score").setAttribute("disabled","");
  document.querySelector(".reset-btn").setAttribute("disabled","");
  document.querySelector(".play_again").setAttribute("disabled","");
}

function undisabled_btn(){
  option_a.removeAttribute("disabled","");
  option_b.removeAttribute("disabled","");
  option_c.removeAttribute("disabled","");
  option_d.removeAttribute("disabled","");
  start_Q.removeAttribute("disabled","");
  document.querySelector(".high-scores-btn").removeAttribute("disabled","");
  document.querySelector(".upload_score").removeAttribute("disabled","");
  document.querySelector(".reset-btn").removeAttribute("disabled","");
  document.querySelector(".play_again").removeAttribute("disabled","");
}

function dispQuestion() {
  question.textContent = array_qstns[qstn_num];
  option_a.textContent = array_opt_a[qstn_num];
  option_b.textContent = array_opt_b[qstn_num];
  option_c.textContent = array_opt_c[qstn_num];
  option_d.textContent = array_opt_d[qstn_num];
}

function answer_a(){
  console.log("testA")
  user_answer[qstn_num] = "a";
  post_answer();
}
function answer_b(){
  console.log("testB")
  user_answer[qstn_num] = "b";
  post_answer();
}
function answer_c(){
  console.log("testC")
  user_answer[qstn_num] = "c";
  post_answer();
}
function answer_d(){
  console.log("testD")
  user_answer[qstn_num] = "d";
  post_answer();
}

function post_answer(){
  review_answer();
  qstn_num = qstn_num+1;
  setTimeout(dispQuestion,1000);
  setTimeout(show_again,1000);


    
  if (qstn_num === correct_answer.length) {
    setTimeout(show_user_score,1001);
    setTimeout(hide_options,1001);
    document.querySelector(".final_score").textContent = timerCount;
    save_score = timerCount;
  }
}

function review_answer(){
  hide_options();
  if (user_answer[qstn_num] == correct_answer[qstn_num]) {
    document.querySelector(".correct-mark").classList.remove("d-none");
    correctans.textContent = "Correct";
  } else {
    document.querySelector(".incorrect-mark").classList.remove("d-none");
    incorrectans.textContent = "Incorrect";
    timerCount = timerCount -15;
  }
}

  function startTimer() {
    timer = setInterval(function() {
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (qstn_num === correct_answer.length && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          console.log(timerCount + "quiz end win")
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        console.log(timerCount + "quiz ends zero")
        times_up();
      }
      if (timerCount < 0){
        disabled_btn()
        timerCount = 1;
        setTimeout(undisabled_btn,1001);
      }
      timerCount--;
    }, 1000);
  }

  start_Q.addEventListener("click", start_Quiz);

  option_a.addEventListener("click",answer_a);
  option_b.addEventListener("click",answer_b);
  option_c.addEventListener("click",answer_c);
  option_d.addEventListener("click",answer_d);

  document.querySelector(".high-scores-btn").addEventListener("click",go_high_scores_page);
  document.querySelector(".upload_score").addEventListener("click",go_high_scores_page);
  document.querySelector(".reset-btn").addEventListener("click",reset);
  document.querySelector(".play_again").addEventListener("click",play_again);
  
  function play_again(){
    reset()
    setTimeout(start_Quiz,1003);
  }

  function start_Quiz() {
    start_game_display();
    qstn_num = 0;
    startTimer();
    dispQuestion();
  }