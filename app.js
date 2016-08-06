$(document).ready(function(){

	var currentQuestion = 0;
	var questionCount = 0;
	
	var userScore = {
	rightCount: 0,
	wrongCount: 0,
}

	var updateCounter = function(){
		questionCount = questionCount + 1;
		$('.current-question-count').text(questionCount);
	}

	function nextQuestion(){
		currentQuestion++;
		
	}
	function showSummary(){
		$('.summary').show();
		$('.question-counter-area').hide();
		$('.correct-answer-counter').hide();
		$('.correct').text(userScore.rightCount);
	}
	
	function showQuestion(){
		var questionObj = questions[currentQuestion];
		$('.correct-answer-counter').show();
		$('.question-counter-area').show();
		$('#answer-list').html('');
		updateCounter();
		if (questionObj){
			$('.question').text(questionObj.question);
			for (i=0; i<questionObj.answers.length; i++){
				$('#answer-list').append('<li><input type="radio" name="radio">' + questionObj.answers[i]  + '</li>');
				$('input[type=radio').prop('checked', '');
				}	
		} else {
			showSummary();
			$('.question-area').hide();
			
		}
	}
	function checkA(){
		var ans = $('input[name="radio"]:checked').val();
		if(questions[currentQuestion].answer == ans){
			userScore.rightCount++;
		} else {
			userScore.wrongCount++;

		}
	}
	$('.start-button').on('click', function(){
		showQuestion();
		$('.start-button').hide();
		$('.question-area').show();
	})


	$('.question-area').on('click', '#next-button', function(){
		nextQuestion();
		showQuestion();
		checkA();
	})

	function newTest(){
		location.reload();
	}

	$('.restart-test').click(newTest);

 var questions = [{
 	question: "'Camera' is actually a latin word meaning:",
 	answers: ['Picture Box', 'Room', 'Light Box', 'Opening'],
 	rightAnswer: 1,
 }, {
 	question: "What does the acronym DSLR stand for?",
 	answers: ['Diminished Solar Light Regulator', 'Digital Single Lens Reflux', 'Digital Solar Lens Reflector', 'Digital Scene Light Reflector'],
 	rightAnswer: 1,
 },{
 	question: "The amount of light passing through a lens is defined by the:",
 	answers: ['Shutter Speed', 'ISO', 'Exposure', 'Aperture'],
 	rightAnswer: 3,
 },{
 	question: "The balancing of light within a photograph is known as the:",
 	answers: ['White balance', 'Aperture', 'Exposure', 'Shutter Speed'],
 	rightAnswer: 2,
 },{
 	question: "'Photography' comes from the Greek words PHOTO and GRAPHOS. What does it mean?",
 	answers: ['Light graphics', 'Light writing', 'Light drawing', 'Graphic drawing'],
 	rightAnswer: 1,
 },{
 	question: "What is 'bulb mode' on a camera?",
 	answers: ['A way to use your flash effectively', 'A way to leave your shutter open indefinitely', 'There is no bulb mode', 'A way to put two images into one picture'],
 	rightAnswer: 1,
 },{
 	question: "The amount or light or darkness on a photograph is known as the:",
 	answers: ['Exposure', 'Aperture', 'Shutter speed', 'Contrast'],
 	rightAnswer: 0,
 },{
 	question: "Perfect exposure is the result of the right combination of:",
 	answers: ['Shutter speed + aperture + resolution', 'Film speed + aperture + exposure', 'Exposure + aperture + shutter speed', 'Aperture + shutter speed + film speed'],
 	rightAnswer: 3,
 },{
 	question: "What is the angle of view on a fisheye lens?",
 	answers: ['180 degrees', '225 degrees', '270 degrees', '360 degrees'],
 	rightAnswer: 0,
 }, {
 	question: "Which of these is not an editing program?",
 	answers: ['Lightroom', 'Photoshop', 'Bridge', 'Illustrator'],
 	rightAnswer: 3,
 }
 ]

})

