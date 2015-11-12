function Question(question, rightAnswer, wrongAnswer) {
	this.question = question;
	this.rightAnswer = rightAnswer;
	this.wrongAnswer = wrongAnswer;
}

Question.prototype.questionHTML = function() {
	var questionString = '<h2 id="question" class="headline-secondary--grouped">'
	questionString += '<span>';
	questionString += this.question;
	questionString += '</span></h2>';
	return questionString;
}

Question.prototype.choice0HTML = function() {
	var choice0HTML = '<p id="choice0">';
	choice0HTML += this.rightAnswer;
	choice0HTML += '</p>';
	return choice0HTML;
}

Question.prototype.choice1HTML = function() {
	var choice1HTML = '<p id="choice0">';
	choice1HTML += this.wrongAnswer;
	choice1HTML += '</p>';
	return choice1HTML;
}