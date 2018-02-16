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
	


];

const main = document.querySelector('.main');

const nextButton = document.querySelector('.nextButton');
const checkButton = document.createElement('button');


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
			checkButton.className = 'check';
			main.appendChild(checkButton);
		}

		counter++;

	}
	

});

// check answer and update score.
checkButton.addEventListener('click', () => {

	let selected = 'input[name="question' + (counter-1) + '"]:checked';
	
	main.appendChild(message);
	let userChoice = main.querySelector(selected || {}).value;
	//console.log(userChoice);


	if (userChoice === questions[counter-1].correct) {
		
		message.textContent = "Well done! That is correct!";
		message.style.color = "lightgreen";

	} else {
		message.textContent = "Sorry! You got it wrong this time.";
		message.style.color = "red";
	}
	//console.log(score);
});