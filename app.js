var quiz = new Quiz();

var question0 = new Question("Is this project possible?", "Yes", "No");
var question1 = new Question("Do you have enough info to complete this project?", "Yes", "No");
var question2 = new Question("Do you feel more or less confident after this course?", "More", "Less");

quiz.add(question0);
quiz.add(question1);
quiz.add(question2);

quiz.renderQuestion(questionElement, choice0Element, choice1Element, progressElement, scoreElement);

var guess0button = document.getElementById('guess0');
guess0button.onclick = function() {
	quiz.currentScore += 1;
	quiz.currentQuestionIndex += 1;
	if (quiz.currentQuestionIndex < quiz.questions.length) {
		quiz.renderQuestion(questionElement, choice0Element, choice1Element, progressElement, scoreElement);
	} else {
		quiz.renderFinal();
	}
}

var guess1button = document.getElementById('guess1');
guess1button.onclick = function() {
	quiz.currentQuestionIndex += 1;
	if (quiz.currentQuestionIndex < quiz.questions.length) {
		quiz.renderQuestion(questionElement, choice0Element, choice1Element, progressElement, scoreElement);
	} else {
		quiz.renderFinal();
	}
}