let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let numberCorrect = 0;
let newNumberCorrect = 0;
let numberOfQuestions = 4;

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

console.log(newNumberCorrect);
