const questions = [
	{
		question: "Stack is a _____________ data structure.", 
		choices: ["FIFO", "LIFO", "LILO", "None of these"],
		correct: "1"
	}, 
	{
		question: "What data structure can you use to represent a pile of books?",
		choices:["Queue", "Tree", "Stack", "Graph"],
		correct: "2"

	},
	{
		question: "If you try to pop an element from an empty stack, which of the following will occur?",
		choices:["Overflow", "Underflow", "No Error", "Value of top will be printed"],
		correct:"1"

	},
	{
		question: "What is the time complexity of a stack push operation implemented using an array?",
		choices:["O(n)", "O(n x n),", "O(1)", "O(sqrt(n))"],
		correct:"2"

	},
	{
		question: "Which of the following is the correct syntax for the STL stack?",
		choices:["int v = S.pop();", "x = S.push();", "S.push(x);", "push(S, x);"],
		correct:"2"

	},
	{
		question: "What is the full-form of STL?" ,
		choices:["Simple Template Library", "Selector Type Library", "Standard Type Library", "Standard Template Library"],
		correct: "3"

	},
	{
		question: "If algorithm X has O(N x N) time complexity, and algorithm Y has O(N) time complexity, then Y is better than X for",
		choices:["no inputs", "all inputs", "large inputs", "small inputs"],
		correct: "2"

	},
	{
		question: "A stack is a/an ______________.",
		choices:["data structure", "algorithm", "variable", "none of these"],
		correct: "0"

	},
	{
		question: "stack <int> s: What does this mean?",
		choices:["int is a stack", "s is an integer", "s is a stack that can contain integers", "none of these"],
		correct: "2"

	},
	{
		question: "Which of the following is not a predefined operation for an STL stack?",
		choices:["push()", "pop()", "clear()", "empty()"],
		correct: "2"

	},


];

const main = document.querySelector('.main');

const nextButton = document.querySelector('.nextButton');
const checkButton = document.createElement('button');


const response = document.querySelector('.response');


let p = document.createElement('p');
let optionA = document.createElement('span');
let optionB = document.createElement('span');
let optionC = document.createElement('span');
let optionD = document.createElement('span');


main.appendChild(p);
main.appendChild(optionA);
main.appendChild(optionB);
main.appendChild(optionC);
main.appendChild(optionD);

let counter = 0;

let message = document.createElement('p');
// functions
nextButton.addEventListener('click', () => {
	
	if (counter < questions.length) {
		message.textContent = "";
		p.textContent = questions[counter].question;
		optionA.innerHTML = "<input type='radio' value='0' name='question" + counter + "' <label>" + questions[counter].choices[0] + "</label><br>";
		optionB.innerHTML = "<input type='radio' value='1' name='question" + counter + "' <label>" + questions[counter].choices[1] + "</label><br>";
		optionC.innerHTML = "<input type='radio' value='2' name='question" + counter + "' <label>" + questions[counter].choices[2] + "</label><br>";
		optionD.innerHTML = "<input type='radio' value='3' name='question" + counter + "' <label>" + questions[counter].choices[3] + "</label><br>";

		
		// when displaying the first question, add a check button.
		if (!counter) {
			
			checkButton.textContent = "Check";
			checkButton.className = 'checkButton';
			main.appendChild(checkButton);
		}

		counter++;

		// for last question: clear the board. add a final message. 
		if (counter >= questions.length) {
			// remove the questions area
			main.removeChild(p);
			main.removeChild(optionA);
			main.removeChild(optionB);
			main.removeChild(optionC);
			main.removeChild(optionD);

			// remove the buttons.
			nextButton.style.display = 'none';
			nextButton.style.display = 'none';

			// display final message.
			message.textContent = "Great work! Refresh the page if you want to take the quiz again.";
			message.style.color = "blue";
		}

	}
	

});

// check answer and update score.
checkButton.addEventListener('click', () => {

	let selected = 'input[name="question' + (counter-1) + '"]:checked';
	
	response.appendChild(message);
	let userChoice = main.querySelector(selected || {}).value;
	//console.log(userChoice);


	if (userChoice === questions[counter-1].correct) {
		
		message.textContent = "Well done! That is correct!";
		message.style.color = "green";

	} else {
		message.textContent = "Sorry! You got it wrong this time.";
		message.style.color = "red";
	}
	//console.log(score);
});