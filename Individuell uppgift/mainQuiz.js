document.addEventListener("DOMContentLoaded", function(e) {

    //Main Class To run Quiz Game
    class Game {
        constructor(questions, answers) {
            this.index = 0;
            this.questions = [];
            this.setQuestions(questions);
            // this.setAnswers(answers);
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

            for (let question of questions) {
                this.questions.push(new Question(question));
            }

        }

        nextQuestion() {

            if (this.index < this.questions.length) {
                this.index += 1;
            }
            return this.questions[this.index - 1]
        }

    };


    class Question {
        constructor(question_json) {
            this.id = question_json.id;
            this.question = question_json.question;
            this.answers = [];
            this.category = question_json.category;
            this.difficulty = question_json.difficulty;


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

            console.log("----------------------------");

        }

    }

    class Answer {
        constructor(answer, correct_answers) {
            this.answer = answer;
            this.answer_correct = correct_answers;

        }

        printAswer() {
            console.log("Answer classen): ", this.answer);

            console.log("----------------------------");

        }



    }

    let game;
    let currentQuestion;


    //Function that fetch API data for quiz game
    function new_game() {
        // let game;
        fetch('https://quizapi.io/api/v1/questions?apiKey=javwwMCD7lG5HQ0D2L01kXHB6llRG5WFwsTkwOwE&limit=10')
            .then(response => response.json())
            .then(data => {
                game = new Game(data);
            });
        return game

    };



    //Button for launch a new quiz game.
    let newGameBtn = document.getElementById("new-game-btn");
    newGameBtn.addEventListener("click", new_game);


    //Button to get the next quiz question and answer alternativ
    let nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", function(e) {
        console.log("next-btn")

        currentQuestion = game.nextQuestion();
        //currentAnswer = new Question(nextAnswer);

        console.log("nextBtn: ", currentQuestion.answers[0].answer);
        console.log("nextBtn: ", currentQuestion.answers[1].answer);
        console.log("nextBtn: ", currentQuestion.answers[2].answer);
        console.log("nextBtn: ", currentQuestion.answers[3].answer);
        console.log("nextBtn: ", currentQuestion.answers[4].answer);
        console.log("nextBtn: ", currentQuestion.answers[5].answer);




        //This sends the question to the right element.
        document.getElementById("question-id").textContent = currentQuestion.question;

        //This sends the answer to the right element.
        document.getElementById("answer-id-a").textContent = currentQuestion.answers[0].answer;
        document.getElementById("answer-id-b").textContent = currentQuestion.answers[1].answer;
        document.getElementById("answer-id-c").textContent = currentQuestion.answers[2].answer;
        document.getElementById("answer-id-d").textContent = currentQuestion.answers[3].answer;
        document.getElementById("answer-id-e").textContent = currentQuestion.answers[4].answer;
        document.getElementById("answer-id-f").textContent = currentQuestion.answers[5].answer;


    });


});