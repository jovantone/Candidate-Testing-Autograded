const input = require("readline-sync");
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? " ,
  "True or false: 5 kilometer == 5000 meters? " ,
  "(5 + 3)/2 * 10 = ? " ,
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? " ,
  "What is the minimum crew size for the ISS? " 
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let newNumberCorrect = 0;
let numberCorrect = 0;
let numberOfQuestions = 5;




function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name. ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  console.log(
    `Here are the candidates answers: ${candidateAnswers}\nAnd here are the correct answers: ${correctAnswers}`
  );

//TODO 3.2 use this variable to calculate the candidates score.

  if (candidateAnswers[0] == correctAnswers[0]) {
    newNumberCorrect = numberCorrect + 1;
  }

  if (candidateAnswers[1] == correctAnswers[1]) {
    newNumberCorrect = numberCorrect + 2;
  }

  if (candidateAnswers[2] == correctAnswers[2]) {
    newNumberCorrect = numberCorrect + 3;
  }

  if (candidateAnswers[3] == correctAnswers[3]) {
    newNumberCorrect = numberCorrect + 4;
  }

  if (candidateAnswers[4] == correctAnswers[4]) {
    newNumberCorrect = numberCorrect + 5;
  }

  if (newNumberCorrect === 5) {
    console.log(`You have scored 100%`);
  }

  if (newNumberCorrect === 4) {
    console.log(`You have scored 80%`);
  }

  if (newNumberCorrect === 3) {
    console.log(`You have scored 60%`);
  }

  if (newNumberCorrect === 2) {
    console.log(`You have scored 40%`);
  }

  if (newNumberCorrect === 1) {
    console.log(`You have scored 20%`);
  }
  if (newNumberCorrect === 0) {
    console.log(`Zero questions right, YOU FAILED.`);
  }

let grade = (numberOfQuestions / newNumberCorrect) * 100;
console.log(grade);








  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello " + candidateName + ".");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram,
};
