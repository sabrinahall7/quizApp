var questions = [
	{
		question: "Who is Mickey Mouse's dog?",
		answer: "Pluto"
	},
	{
		question: "Who is Shrek's nobel steed?",
		answer: "Donkey"
	},
	{
		question: "What country does the Lion King take place?",
		answer: "Africa"
	},
	{
		question: "What is the name of the red Jamaican prawn from The Little Mermaid?",
		answer: "Sebastian"
	},
	{
		question: "What kind of fruit does Snow White eat before she dies?",
		answer: "apple"
	},
	{
		question: "What year was the orginal Pinocchio released?",
		answer: 1940
	},
	{
		question: "Is Peter Pan based on a book or a play?",
		answer: "play"
	},
	{
		question: "What was Pixar's first featured film?",
		answer: "Toy Story"
	},
	{
		question: "What kind of deer is Bambi?",
		answer: "mule deer"
	},
	{
		question: "What kind of bug is the main character in A Bug's Life?",
		answer: "ant"
	}
];

// loop through each questions
for(var i = 0; i < questions.length; i++) {
	// store each question value
	var question = questions[i].question;
	// store each element to add question too
	var el = document.getElementById('question' + [i]);

	// check what question and element is being selected
	console.log(question, el);

	// update text content of each element
	el.textContent = question;
}

// check results when the user submits quiz
function testResults() {
	// store variables to update correct and incorrect totals
	var correct = 0;
	var incorrect = 0;

	// loop through questions array
	for(var i = 0; i < questions.length; i++) {
		// store each correct answer
		var answer = questions[i].answer;
		// store each user answer
		var guess = document.getElementById('answer' + [i]).value;
		// store element to add a class if correct or incorrect
		var questionSpot = document.getElementById('question' + [i]);

		// check if the user answer matches the correct answer
		if(answer == guess) {
			// update class on questionSpot
			questionSpot.className = 'correct';
			// add one to correct
			correct++;
		} else {
			// update class on questionSpot
			questionSpot.className = 'incorrect';
			// add one to incorrect
			incorrect++;
		};
	};

	// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}
