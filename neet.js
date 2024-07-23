function validate() {
    const totalQuestions = document.getElementById('totalQuestions').value;
    const correctAnswers = document.getElementById('correctAnswers').value;
    const incorrectAnswers = document.getElementById('incorrectAnswers').value;
  
    if (!totalQuestions || !correctAnswers || !incorrectAnswers) {
      alert('Please fill out all fields.');
      return;
    }
  
    if (parseInt(correctAnswers) + parseInt(incorrectAnswers) > parseInt(totalQuestions)) {
      alert('The sum of correct and incorrect answers cannot exceed the total number of questions.');
      return;
    }
  
    const totalMarks = (correctAnswers * 4) - (incorrectAnswers * 1);
    document.getElementById('totalMarks').value = totalMarks;
}