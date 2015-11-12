var questionElement = document.getElementById('question');
var choice0Element = document.getElementById('choice0');
var choice1Element = document.getElementById('choice1');
var progressElement = document.getElementById('progress');
var scoreElement = document.getElementById('score');
var quizElement = document.getElementById('quiz');

Quiz.prototype.scoreHTML = function() {
	var scoreHTML = '<h3 id="score">';
	scoreHTML += 'Current Score: ';
	scoreHTML += this.currentScore;
	scoreHTML += '</h3>';
	return scoreHTML;
}

Quiz.prototype.progressHTML = function() {
	var progressHTML = '<p id="progress">';
	progressHTML += 'Question ';
	progressHTML +=  quiz.currentQuestionIndex + 1;
	progressHTML +=  ' of ';
	progressHTML +=  quiz.questions.length;
	progressHTML += '</p>';
	return progressHTML;
}

Quiz.prototype.finalHTML = function() {
	quizElement.innerHTML = '';
	var finalHTML = '<h1>Awesome Quiz</h1>';
	finalHTML += '<h1>Final Score: ';
	finalHTML += this.currentScore;
	finalHTML += '</h1>';
	return finalHTML;
}