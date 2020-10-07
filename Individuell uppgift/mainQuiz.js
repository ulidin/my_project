document.addEventListener("DOMContentLoaded", function(e) {

    let chkbox = document.getElementsByClassName("chkbox");
    let answerClass = document.getElementsByClassName("answer-class");

    function hiddenCheckbox() {
        if (chkbox) {
            for (let x = 0; x < 6; x++) {
                chkbox[x].style.visibility = "hidden";
                answerClass[x].style.visibility = "hidden";
            }
        }
    }

    hiddenCheckbox();

    //Main Class To run Quiz Game
    class Game {
        constructor(questions) {
            this.index = 0;
            this.questions = [];
            this.setQuestions(questions);
            this.start();

            console.log("inne i game kollar längden: ", questions.length);
        }

        start() {
            this.printQuestions();
        }

        printQuestions() {
            for (let question of this.questions) {
                question.print();
            }
        }

        setQuestions(questions) {
            let countQuestion = 1;
            for (let question of questions) {
                this.questions.push(new Question(question, countQuestion++));
            }
        }

        nextQuestion() {
            if (this.index < this.questions.length) {
                this.index += 1;
            }
            return this.questions[this.index - 1]
        }

        previousQuestion() {
            if (this.index > 1) {
                this.index -= 1;
            }
            return this.questions[this.index - 1]
        }
    };


    class Question {
        constructor(question_json, index) {
            this.id = question_json.id;
            this.question = question_json.question;
            this.answers = [];
            this.category = question_json.category;
            this.difficulty = question_json.difficulty;
            this.questionNumber = index;

            this.answers.push(new Answer(question_json.answers.answer_a, question_json.correct_answers.answer_a_correct));
            this.answers.push(new Answer(question_json.answers.answer_b, question_json.correct_answers.answer_b_correct));
            this.answers.push(new Answer(question_json.answers.answer_c, question_json.correct_answers.answer_c_correct));
            this.answers.push(new Answer(question_json.answers.answer_d, question_json.correct_answers.answer_d_correct));
            this.answers.push(new Answer(question_json.answers.answer_e, question_json.correct_answers.answer_e_correct));
            this.answers.push(new Answer(question_json.answers.answer_f, question_json.correct_answers.answer_f_correct));
        }

        print() {
            console.log("id: " + this.id);
            console.log("category: " + this.category);
            console.log("difficulty: " + this.difficulty);
            console.log("question: " + this.question);
            console.log("classen Question): ", this.answers);
            console.log("question number: ", this.questionNumber);
            console.log("----------------------------");
        }
    }

    class Answer {
        constructor(answer, correct_answers) {
            this.answer = answer;
            this.answer_correct = correct_answers;
            this.isChecked = false;
        }

        printAnswer() {
            console.log("Answer classen): ", this.answer);
            console.log("Answer classen): ", this.isChecked);
            console.log("----------------------------");
        }


    }


    let game;
    let currentQuestion;


    //Function that fetch API data for quiz game
    function new_game() {

        fetch('https://quizapi.io/api/v1/questions?apiKey=javwwMCD7lG5HQ0D2L01kXHB6llRG5WFwsTkwOwE&limit=10')
            .then(response => response.json())
            .then(data => {
                game = new Game(data);
            });
        return game
    };



    //Button for launch a new quiz game.
    let newGameBtn = document.getElementById("new-game-btn");
    newGameBtn.addEventListener("click", function(e) {
        document.getElementById("question-id").textContent = "";
        document.getElementById("answer-id-f").textContent = "";
        document.getElementById("answer-id-a").textContent = "";
        document.getElementById("answer-id-b").textContent = "";
        document.getElementById("answer-id-c").textContent = "";
        document.getElementById("answer-id-d").textContent = "";
        document.getElementById("answer-id-e").textContent = "";
        hiddenCheckbox()
        new_game();

    });



    //Button to go back in the quiz question and answer alternativ
    let backBtn = document.getElementById("back-btn");
    backBtn.addEventListener("click", function(e) {
        currentQuestion = game.previousQuestion();

        hiddenCheckbox();
        readCheckBoxes();
        updateQustionCountField();


        console.log("back-btn")


        //console.log("nextBtn count value: ", currentQuestion.question);

        // This writes in console the question in number
        printConsoleQuestion();

        //writes the question on screen
        printQuestion();

    });


    //Button to get the next quiz question and answer alternativ
    let nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", function(e) {
        currentQuestion = game.nextQuestion();

        hiddenCheckbox();
        readCheckBoxes();
        updateQustionCountField();

        console.log("next-btn")


        //console.log("nextBtn count value: ", currentQuestion.question);

        // This writes in console the question in number
        printConsoleQuestion();

        //writes the question on screen
        printQuestion();

    });



    function updateQustionCountField() {
        document.getElementById("question-count").textContent = currentQuestion.questionNumber + " / " + game.questions.length;
        console.log("question field: ", currentQuestion.questionNumber);

    }


    function printConsoleQuestion() {

        // This writes in console the question in number
        //console.log("nextBtn count value: ", currentQuestion.question);

        //info just for the console to see the result
        //answers
        console.log("nextBtn answer: ", currentQuestion.answers[0].answer);
        console.log("nextBtn answer: ", currentQuestion.answers[1].answer);
        console.log("nextBtn answer: ", currentQuestion.answers[2].answer);
        console.log("nextBtn answer: ", currentQuestion.answers[3].answer);
        console.log("nextBtn answer: ", currentQuestion.answers[4].answer);
        console.log("nextBtn answer: ", currentQuestion.answers[5].answer);

        //correct answers
        console.log("nextBtn correct_answers: ", currentQuestion.answers[0].answer_correct);
        console.log("nextBtn correct_answers: ", currentQuestion.answers[1].answer_correct);
        console.log("nextBtn correct_answers: ", currentQuestion.answers[2].answer_correct);
        console.log("nextBtn correct_answers: ", currentQuestion.answers[3].answer_correct);
        console.log("nextBtn correct_answers: ", currentQuestion.answers[4].answer_correct);
        console.log("nextBtn correct_answers: ", currentQuestion.answers[5].answer_correct);
    }


    function printQuestion() {

        //This sends the question to the right element.
        document.getElementById("question-id").textContent = currentQuestion.question;


        // for loop to exclude checkboxes with no answer alternativ
        for (let x = 0; x < 6; x++) {
            if (currentQuestion.answers[x].answer !== null) {
                chkbox[x].style.visibility = "visible";
                answerClass[x].style.visibility = "visible";

                //This sends the answer to the right element.
                document.getElementById("answer-id-a").textContent = currentQuestion.answers[0].answer;
                document.getElementById("answer-id-b").textContent = currentQuestion.answers[1].answer;
                document.getElementById("answer-id-c").textContent = currentQuestion.answers[2].answer;
                document.getElementById("answer-id-d").textContent = currentQuestion.answers[3].answer;
                document.getElementById("answer-id-e").textContent = currentQuestion.answers[4].answer;
                document.getElementById("answer-id-f").textContent = currentQuestion.answers[5].answer;

                //Checks if a checkbox is checked
                if (chkbox[x].checked == true) {
                    console.log(chkbox[x], "Är checkad");
                }
            }
        }



    }


    function readCheckBoxes() {
        for (let i = 0; i < 6; i++) {
            chkbox[i].checked = currentQuestion.answers[i].isChecked;
        }
    };



    for (let i = 0; i < 6; i++) {
        chkbox[i].addEventListener("click", function(e) {
            currentQuestion.answers[i].isChecked = chkbox[i].checked;
            console.log("inne i chkboxen: " + currentQuestion.answers[i].isChecked);

        });
    }
});