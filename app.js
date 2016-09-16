$(document).ready(function(){

  var questions = [
    new Question(
      "'Camera' is actually a latin word meaning:",
      ['Picture Box', 'Room', 'Light Box', 'Opening'],
      1),
    new Question(
      "What does the acronym DSLR stand for?",
      ['Diminished Solar Light Regulator', 'Digital Single Lens Reflux', 'Digital Solar Lens Reflector', 'Digital Scene Light Reflector'],
      1),
    new Question(
      "The amount of light passing through a lens is defined by the:",
      ['Shutter Speed', 'ISO', 'Exposure', 'Aperture'],
      3),
    new Question(
      "The balancing of light within a photograph is known as the:",
      ['White balance', 'Aperture', 'Exposure', 'Shutter Speed'],
      2),
    new Question(
      "'Photography' comes from the Greek words PHOTO and GRAPHOS. What does it mean?",
      ['Light graphics', 'Light writing', 'Light drawing', 'Graphic drawing'],
      1),
    new Question(
      "What is 'bulb mode' on a camera?",
      ['A way to use your flash effectively', 'A way to leave your shutter open indefinitely', 'There is no bulb mode', 'A way to put two images into one picture'],
      1
    )
  ];

  var photoQuiz = new Quiz(questions);

  var updateCounter = function(){
    $('.current-question-count').text(photoQuiz.showActualQuestionNumber());
    $('.correct-answer').text(photoQuiz.getRightTotal());
    $('.number-of-questions').text(photoQuiz.countQuestions());
  }

  function showSummary(){
    $('.summary').show();
    $('.question-counter-area').hide();
    $('.correct-answer-counter').hide();
    $('.correct').text(photoQuiz.getRightTotal());
  }
  
  function showQuestion(){
    var questionObj = photoQuiz.getCurrentQuestion();
    $('.correct-answer-counter').show();
    $('.question-counter-area').show();
    $('#answer-list').html('');
    updateCounter();
    if (questionObj){
      $('.question').text(questionObj.question);
      for (i=0; i<questionObj.answers.length; i++){
	$('#answer-list').append('<li><input type="radio" name="answer" value="' + i + '">' + questionObj.answers[i]  + '</li>');
      }	
    } else {
      showSummary();
      $('.question-area').hide();
    }
  }
  
  $('.start-button').on('click', function(){
    showQuestion();
    $('.start-button').hide();
    $('.question-area').show();
  })


  $('.question-area').on('click', '#next-button', function(){
    if ($('input[name="answer"]:checked').val()){ 
      photoQuiz.checkA($('input[name="answer"]:checked').val());
      photoQuiz.nextQuestion();
      showQuestion();
    } else {
      alert("Please choose an answer");
    }
  })

  function newTest(){
    photoQuiz = new Quiz(questions);
    showQuestion();
    $('.question-area').show();
    $('.summary').hide();
  }

  $('.restart-test').click(newTest);

})

