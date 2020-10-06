document.addEventListener("DOMContentLoaded", function(e) {


    class Question {
        constructor(question) {
            this.id = question.id;
            this.question = question.question;
            this.description = question.description;
            this.answers = question.answers;
            console.log("Test")
            let nextBtn = document.getElementById("next-btn");
            nextBtn.addEventListener("click", function(e) {
                let answerA = document.getElementById("answer-id-a");
                answerA.textContent = answer_a;

            });
        }

    };





    class QuestionSet {
        constructor(questions) {
            this.questions = [];


            for (let question of questions) {
                this.questions.push(new Question(question));
            }
        }

        list() {
            console.log(this.questions);
        }
    }



    fetch('https://quizapi.io/api/v1/questions?apiKey=javwwMCD7lG5HQ0D2L01kXHB6llRG5WFwsTkwOwE')
        .then(response => response.json())
        .then(data => {
            let questions = new QuestionSet(data);
            questions.list();
        });

});