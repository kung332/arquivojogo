var score = 0;

function checkAnswer(element, answerIndex) {
  var correctAnswerIndex = 1; // Defina o índice da resposta correta

  if (answerIndex === correctAnswerIndex) {
    element.classList.add('correct');
    score += 1; // Aumenta a pontuação em 1 ponto
    document.querySelector('.score1').textContent = score;
    document.querySelector('.score2').textContent = score;
  }

  // Remova os eventos de clique após responder
  var answers = document.getElementsByClassName('answer');
  for (var i = 0; i < answers.length; i++) {
    answers[i].removeAttribute('onclick');
  }
}