const firstQuestions = document.querySelector(".first-head-content");
const secondQuestions = document.querySelector(".second-head-content");
const thirdQuestions = document.querySelector(".third-head-content");
const fourQuestions = document.querySelector(".four-head-content");
const resultsPage = document.querySelector(".results-container");


const showQuestions = (e) => {
    function showAnswer() {
        firstQuestions.classList.add("showQuestions");
    }
    setTimeout(showAnswer, 500);
}

const hideAndGetQuestions = (e) => {
    function hideAnswer() {
        if (firstQuestions.classList.contains("showQuestions")) {
        firstQuestions.classList.replace("showQuestions", "hideQuestions");
        const showSecondQuestion = (e) => {
            secondQuestions.classList.add("showQuestions")
        }
        return setTimeout(showSecondQuestion, 2000)
        } else if (secondQuestions.classList.contains("showQuestions")) {
            secondQuestions.classList.replace("showQuestions", "hideQuestions");
            const showThirdQuestion = (e) => {
                thirdQuestions.classList.add("showQuestions");
            }
        return setTimeout(showThirdQuestion, 2000)
        } else if (thirdQuestions.classList.contains("showQuestions")) {
            thirdQuestions.classList.replace("showQuestions", "hideQuestions");
            const showFourQuestion = (e) => {
                fourQuestions.classList.add("showQuestions");
            }
        return setTimeout(showFourQuestion, 2000)
        } else if(fourQuestions.classList.contains("showQuestions")) {
            fourQuestions.classList.replace("showQuestions", "hideQuestions");
            const showLastPage = (e) => {
                const summaryPointsText = document.querySelector(".results-container .results .points");
                resultsPage.classList.add("showLastPage");
                summaryPointsText.innerHTML = points + " / " + questions;
            }
        return setTimeout(showLastPage, 2000);
        }
    }
    return setTimeout(hideAnswer, 1000)
}

firstQuestBtns.forEach((button) => {
    button.addEventListener("click", hideAndGetQuestions)
})
secondQuestBtns.forEach((button) => {
    button.addEventListener("click", hideAndGetQuestions)
})
thirdQuestBtns.forEach((button) => {
    button.addEventListener("click", hideAndGetQuestions)
})
fourQuestBtns.forEach((button) => {
    button.addEventListener("click", hideAndGetQuestions)
})

window.addEventListener("load", showQuestions);






