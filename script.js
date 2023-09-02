function checkAnswer() {
  const answer = document.getElementById("answer-input").value;
  if (answer.toLowerCase() == "joe biden") {
   document.getElementById("result").innerHTML = "Correct!";
  } else {
    document.getElementById("result").innerHTML = "Incorrect!";
  }
}

function checkQuiz() {
  const answer = document.getElementById("quiz-answer").value;
  if (answer.toLowerCase() == "yes") {
    document.getElementById("outcome").innerHTML = "WoW! It's a good thing.";
  }
  else {
    document.getElementById("outcome").innerHTML = "Go read some books to gain knowledge.";
  }
}