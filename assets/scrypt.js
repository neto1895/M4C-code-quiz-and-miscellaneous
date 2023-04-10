// Declared all variables for selectors
var start_Q = document.querySelector(".StartQ");
var timerElement = document.querySelector(".timer-count");
var question = document.querySelector(".question");
var option_a = document.querySelector(".option_a");
var option_b = document.querySelector(".option_b");
var option_c = document.querySelector(".option_c");
var option_d = document.querySelector(".option_d");
var correctans = document.querySelector(".correct");
var incorrectans = document.querySelector(".incorrect");
var array_qstns = [];
var array_opt_a = [];
var array_opt_b = [];
var array_opt_c = [];
var array_opt_d = [];
var correct_answer = [];
var correct_answer2 = ["c","c","d","c","d"];
//Variables for the 3 different quizzes
var code_qstns = ["Commonly used data types DO Not Include: ","The condition in an if / else statement is enclosed with ","Arrays in JavaScript can be used to store ","String values must be enclosed within _______ when being assigned to variables. ","A very useful tool used during development and debugging for printing content to the debugger is: " ]
var code_opt_a = ["1. strings ","1. quotes ","1. numbers and strings ","1. commas ","1. JavaScript"]
var code_opt_b = ["2. booleans ","2. curly brackets ","2. Other arrays ","2. curly brackets ","2. terminal/bash "]
var code_opt_c = ["3. alerts ","3. parenthesis ","3. booleans ","3. quotes ","3. for loops "]
var code_opt_d = ["4. numbers ","4. square brackets ","4. all of the above ","4. parenthesis ","4. console.log "]
var birdQuestions = [  'Which of the following birds is known for its ability to mimic human speech?',  'Which of the following birds is known for its distinctive dance to attract a mate?',  'Which of the following birds has the largest wingspan?',  'Which of the following birds is known for its ability to hover in mid-air?',  'Which of the following birds is known for its bright blue feathers?'];
var birdOptionA = ['Toucan',  'Flamingo',  'Bald Eagle',  'Owl',  'Blue Jay'];
var birdOptionB = [  'Parrot',  'Ostrich',  'Golden Eagle',  'Woodpecker',  'American Robin'];
var birdOptionC = [  'Crow',  'Penguin',  'Albatross',  'Sparrow',  'Cardinal'];
var birdOptionD = [  'Eagle',  'Hummingbird',  'Peregrine Falcon',  'Kestrel',  'Chickadee'];
var ancientHistoryQuestions = [  'Who was the first emperor of Rome?',  'Which civilization built Machu Picchu?',  'What was the capital of the ancient Persian Empire?',  'Who was the leader of the Mongol Empire during its peak?',  'Which ancient civilization is known for building the Great Pyramids of Giza?'];
var ancientHistoryOptionA = [  'Julius Caesar',  'Inca',  'Babylon',  'Genghis Khan',  'Sumerians'];
var ancientHistoryOptionB = [  'Augustus',  'Maya',  'Persepolis',  'Kublai Khan',  'Phoenicians'];
var ancientHistoryOptionC = [  'Mark Antony',  'Aztec',  'Ecbatana',  'Attila the Hun',  'Greeks'];
var ancientHistoryOptionD = [  'Nero',  'Egyptian',  'Susa',  'Timur',  'Egyptians'];
var ancientHistoryCorrectAnswers = ['b', 'a', 'b', 'a', 'd'];
//vars for timer and local register
var qstn_num = 0;
var user_answer = [];
var timer;
var timerCount;
var save_score;
var username_score = [];
timerCount = 75;

// First thing the page do when loaded. Stores the user scores to re-write new scores
function init() {
  var stored_username_score = JSON.parse(localStorage.getItem("username_score"));
  if (stored_username_score !== null) {
    username_score = stored_username_score;
}}
//Selects the type of quiz
function select_quiz(){
  if(document.getElementById("option1").checked){
    array_qstns = code_qstns;
    array_opt_a = code_opt_a;
    array_opt_b = code_opt_b;
    array_opt_c = code_opt_c;
    array_opt_d = code_opt_d;
    correct_answer = correct_answer2;
  } else if (document.getElementById("option2").checked){
    array_qstns = birdQuestions;
    array_opt_a = birdOptionA;
    array_opt_b = birdOptionB;
    array_opt_c = birdOptionC;
    array_opt_d = birdOptionD;
    correct_answer = correct_answer2;
  } else if (document.getElementById("option3").checked){
    array_qstns = ancientHistoryQuestions;
    array_opt_a = ancientHistoryOptionA;
    array_opt_b = ancientHistoryOptionB;
    array_opt_c = ancientHistoryOptionC;
    array_opt_d = ancientHistoryOptionD;
    correct_answer = ancientHistoryCorrectAnswers;
}}
//Uploads the score of the user
function upload(){
  upload_score_user();
  display_score_records();
  go_high_scores_page();
}
function upload_score_user(){
  username_score.push({
    username: document.querySelector(".form-control").value.trim(),
    score: save_score
  })
  document.querySelector(".form-control").value = "";
  save_score = undefined;
  localStorage.setItem("username_score", JSON.stringify(username_score));
}
function display_score_records(){
  document.getElementById("score-list").innerHTML = "";
  for (var i = 0; i < username_score.length; i++) {
    var usnm = username_score[i].username;
    var scr = username_score[i].score;
    var li = document.createElement("li");
    li.textContent = usnm + "    ------   " + scr;
    li.setAttribute("data-index", i);
    document.getElementById("score-list").appendChild(li);
}}
//Change display to show scores
function page_scores(){
  display_score_records();
  go_high_scores_page();
}
function go_high_scores_page(){
  document.querySelector(".high-scores-page").classList.remove("d-none");
  document.querySelector(".question").classList.add("d-none");
  document.querySelector(".btn-group-vertical").classList.add("d-none");
  document.querySelector(".correct-mark").classList.add("d-none");
  document.querySelector(".incorrect-mark").classList.add("d-none");
  document.querySelector(".user_score").classList.add("d-none");
  document.querySelector(".input-group").classList.add("d-none");
  document.querySelector(".Start").classList.add("d-none");
}
//Reset to the page start. Ends the game. 
function reset(){
  disabled_btn()
  resetx2();
  setTimeout(undisabled_btn,1002);
  setTimeout(resetx2,1002);
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
  document.querySelector(".Start").classList.remove("d-none");
  timerElement.textContent = "--";
  correctans.textContent = "";
}


// Functions to hide or display the page elements
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
  document.querySelector(".Start").classList.add("d-none");
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
  document.querySelector(".Start").classList.add("d-none");
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
//Changes the question and options
function dispQuestion() {
  question.textContent = array_qstns[qstn_num];
  option_a.textContent = array_opt_a[qstn_num];
  option_b.textContent = array_opt_b[qstn_num];
  option_c.textContent = array_opt_c[qstn_num];
  option_d.textContent = array_opt_d[qstn_num];
}
//creates the array for the user answers
function answer_a(){
  user_answer[qstn_num] = "a";
  post_answer();
}function answer_b(){
  user_answer[qstn_num] = "b";
  post_answer();
}function answer_c(){
  user_answer[qstn_num] = "c";
  post_answer();
}function answer_d(){
  user_answer[qstn_num] = "d";
  post_answer();
}
//Evaluates the answer of the user
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
}}
function review_answer(){
  hide_options();
  if (user_answer[qstn_num] == correct_answer[qstn_num]) {
    document.querySelector(".correct-mark").classList.remove("d-none");
    correctans.textContent = "Correct";
  } else {
    document.querySelector(".incorrect-mark").classList.remove("d-none");
    incorrectans.textContent = "Incorrect";
    timerCount = timerCount -10;
}}
// Timer function
  function startTimer() {
    timer = setInterval(function() {
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        if (qstn_num === correct_answer.length && timerCount > 0) {
          clearInterval(timer);
      }}if (timerCount === 0) {
        clearInterval(timer);
        times_up();
      } if (timerCount < 0){
        disabled_btn()
        timerCount = 1;
        setTimeout(undisabled_btn,1001);
      } timerCount--;
    }, 1000);
  }

  // Functions to start the game
  function play_again(){
    reset()
    setTimeout(start_Quiz,1003);
  }
  function start_Quiz() {
    select_quiz();
    start_game_display();
    qstn_num = 0;
    startTimer();
    dispQuestion();
  }
  // Buttons code when click
  start_Q.addEventListener("click", start_Quiz);
  option_a.addEventListener("click",answer_a);
  option_b.addEventListener("click",answer_b);
  option_c.addEventListener("click",answer_c);
  option_d.addEventListener("click",answer_d);
  document.querySelector(".high-scores-btn").addEventListener("click",page_scores);
  document.querySelector(".upload_score").addEventListener("click",upload);
  document.querySelector(".reset-btn").addEventListener("click",reset);
  document.querySelector(".play_again").addEventListener("click",play_again);
// Calls the init function when page loads.
  init();