function Question(qText, answers, rightAnswer) {
  this.question = qText;
  this.answers = answers;
  this.rightAnswer = rightAnswer;
}

Question.prototype.checkAnswer = function(answer) {
  if(this.rightAnswer == answer) {
    return true;
  } else {
    return false;
  }
}

function Quiz(questions) {
  this.questions = questions;
  this.currentQuestion = 0;
  this.userScore = {
    rightCount: 0,
    wrongCount: 0,
  };
}

Quiz.prototype.nextQuestion = function() {
  this.currentQuestion++;
}

Quiz.prototype.countQuestions = function() {
  return this.questions.length;
}

Quiz.prototype.getRightTotal = function() {
  return this.userScore.rightCount;
}

Quiz.prototype.showActualQuestionNumber = function() {
  return this.currentQuestion + 1;
}

Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.currentQuestion]
}

Quiz.prototype.checkA = function(ans){
  var question = this.getCurrentQuestion();
  if(question.checkAnswer(ans)){
    this.userScore.rightCount++;
  } else {
    this.userScore.wrongCount++;
  }
}
/*
var quiz1 = new Quiz([math questions]);
var quiz2 = new Quiz([science questions]);
var quiz3 = new Quiz([history questions]);
 */

