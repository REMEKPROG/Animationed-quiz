const firstQuestDiv = document.querySelector(".first-head-position");
const secondQuestDiv = document.querySelector(".second-head-position");
const thirdQuestDiv = document.querySelector(".third-head-position");
const fourQuestDiv = document.querySelector(".four-head-position");
const firstQuestBtns = [
    ...document.querySelectorAll(".first-head-position button"),
];
const secondQuestBtns = [
    ...document.querySelectorAll(".second-head-position button"),
];
const thirdQuestBtns = [
    ...document.querySelectorAll(".third-head-position button"),
];
const fourQuestBtns = [
    ...document.querySelectorAll(".four-head-position button"),
];

let points = 0;
let questions = 0;
const getNextQuestion = () => { //sprawdzenie, który div jest obecnie odpalony i zmienienie go 
    if (firstQuestDiv.dataset.status) {
        firstQuestDiv.dataset.status = "";
        firstQuestDiv.style.display = "none";
        secondQuestDiv.style.display = "flex";
    } else if (secondQuestDiv.dataset.status) {
        secondQuestDiv.dataset.status = "";
        secondQuestDiv.style.display = "none";
        thirdQuestDiv.style.display = "flex";
    } else if (thirdQuestDiv.dataset.status) {
        thirdQuestDiv.dataset.status = "";
        thirdQuestDiv.style.display = "none";
        fourQuestDiv.style.display = "flex";
    } else if(fourQuestDiv.dataset.status) {
      fourQuestDiv.dataset.status = "";
      fourQuestDiv.style.display = "none";
      resultsPage.style.display = "flex";
    }
 }
  const checkAnswerFirstDiv = (e) => {
    if (e.target.dataset.answer === "correct") {
      points++;
      e.target.classList.replace("btn-style", "correct-answer");
      firstQuestBtns.forEach((btn) => {
        btn.disabled = true;
        btn.classList.remove("btn-style-hover");
      });
    } else {
      firstQuestBtns.forEach((btn) => {
        btn.classList.remove("btn-style-hover");
        btn.disabled = true;
        if (btn.dataset.answer === "correct") {
          btn.classList.replace("btn-style", "correct-answer");
        } else {
          btn.classList.replace("btn-style", "incorrect-answer");
        }
      });
    }
    firstQuestDiv.dataset.status = true;
    questions++;
    return setTimeout(getNextQuestion, 2000);
  };


firstQuestBtns.forEach((button) => {
  button.addEventListener("click", checkAnswerFirstDiv);
});


const checkAnswerSecondDiv = (e) => {
    if (e.target.dataset.answer === "correct") {
      points++;
      e.target.classList.replace("btn-style", "correct-answer");
      secondQuestBtns.forEach((btn) => {
        btn.disabled = true;
        btn.classList.remove("btn-style-hover");
      });
    } else {
      secondQuestBtns.forEach((btn) => {
        btn.classList.remove("btn-style-hover");
        btn.disabled = true;
        if (btn.dataset.answer === "correct") {
          btn.classList.replace("btn-style", "correct-answer");
        } else {
          btn.classList.replace("btn-style", "incorrect-answer");
        }
      });
    }
    secondQuestDiv.dataset.status = true;
    questions++;
    return setTimeout(getNextQuestion, 2000);
  };

  secondQuestBtns.forEach((button) => {
    button.addEventListener("click", checkAnswerSecondDiv);
  });



  const checkAnswerThirdDiv = (e) => {
    if (e.target.dataset.answer === "correct") {
      points++;
      e.target.classList.replace("btn-style", "correct-answer");
      thirdQuestBtns.forEach((btn) => {
        btn.disabled = true;
        btn.classList.remove("btn-style-hover");
      });
    } else {
      thirdQuestBtns.forEach((btn) => {
        btn.classList.remove("btn-style-hover");
        btn.disabled = true;
        if (btn.dataset.answer === "correct") {
          btn.classList.replace("btn-style", "correct-answer");
        } else {
          btn.classList.replace("btn-style", "incorrect-answer");
        }
      });
    }
    thirdQuestDiv.dataset.status = true;
    questions++;
    return setTimeout(getNextQuestion, 2000);
  };

  thirdQuestBtns.forEach((button) => {
    button.addEventListener("click", checkAnswerThirdDiv);
  });
  const checkAnswerFourDiv = (e) => {
    if (e.target.dataset.answer === "correct") {
      points++;
      e.target.classList.replace("btn-style", "correct-answer");
      fourQuestBtns.forEach((btn) => {
        btn.disabled = true;
        btn.classList.remove("btn-style-hover");
      });
    } else {
      fourQuestBtns.forEach((btn) => {
        btn.classList.remove("btn-style-hover");
        btn.disabled = true;
        if (btn.dataset.answer === "correct") {
          btn.classList.replace("btn-style", "correct-answer");
        } else {
          btn.classList.replace("btn-style", "incorrect-answer");
        }
      });
    }
    fourQuestDiv.dataset.status = true;
    questions++;
    return setTimeout(getNextQuestion, 2000);
  };

  fourQuestBtns.forEach((button) => {
    button.addEventListener("click", checkAnswerFourDiv);
  });


  const resetButton = document.querySelector(".reloadQuiz");


  const resetQuiz = (e) => {
    resultsPage.classList.remove("showLastPage");
    function reset() {
      questions = 0;
      location.reload();
    }
    return setTimeout(reset, 2000)
  }

  resetButton.addEventListener("click", resetQuiz);





