function Quiz() {
	this.questions = [];
	this.currentQuestionIndex = 0;
	this.currentScore = 0;
}

Quiz.prototype.add = function(question) {
	this.questions.push(question);
}

Quiz.prototype.renderQuestion = function(question, choice0, choice1, progress,score) {
	question.innerHTML = this.questions[this.currentQuestionIndex].questionHTML();
	choice0.innerHTML = this.questions[this.currentQuestionIndex].choice0HTML();
	choice1.innerHTML = this.questions[this.currentQuestionIndex].choice1HTML();
	progress.innerHTML = this.progressHTML();
	score.innerHTML = this.scoreHTML();
}

Quiz.prototype.renderFinal = function() {
	quizElement.innerHTML = quiz.finalHTML();
}
