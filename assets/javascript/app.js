'use strict';
import questions from './questions.js';

let time = 30;
let isQuestionAnswered = false;
let intervalId;
let currentQuestionIndex = 0;
 

function start() {
  intervalId = setInterval(count, 1000);
}


const displayQuestion = function(question) {
  $('#question-display').text(question);
}
const displayAnswerChoice = function(answer) {
  const answerBlock = $(`<div class='col-md-2 answer-choice'>${answer}</div>`);
  answerBlock.on('click', answerClicked);
  $('.answer-display').append(answerBlock);
}

const count = function () {
  time--;
  $('#time-display').text('Time Left: ' + time);
}

$('#start-button').on('click', function(){
  $('#start-button').hide();
  displayQuestion(questions[currentQuestionIndex].question);
  start();
  questions[currentQuestionIndex].answers.forEach(element => {
    displayAnswerChoice(element);
  });
})

function answerClicked () {
  isQuestionAnswered = true;
  clearInterval(intervalId);
  time=30;
  start();

  if(isQuestionAnswered) {
    
  }
}