document.addEventListener("DOMContentLoaded", function(e) {

    class Game {
        constructor(questions) {
            this.index = 0;
            this.questions = [];
            this.set_questions(questions);
            this.start();

            console.log(questions.length);

        }
        start() {
            this.print_questions();
        }

        print_questions() {

            for (let question of this.questions) {
                question.print();
            }
        }


        set_questions(questions) {

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
            console.log("question: " + this.question);

            console.log("----------------------------");

        }

        answers() {

        }



    }

    class Answer {
        constructor(answer, correct_answers) {
            this.answer = answer;
            this.answer_correct = correct_answers;


            // console.log("answer_a: " + this.answer);
            // console.log("answer_b: " + this.answer_correct);


        }


    }

    let game;
    let currentQuestion;

    function new_game() {
        // let game;
        fetch('https://quizapi.io/api/v1/questions?apiKey=javwwMCD7lG5HQ0D2L01kXHB6llRG5WFwsTkwOwE&limit=10')
            .then(response => response.json())
            .then(data => {
                game = new Game(data);
            });
        return game

    };


    // let game = new_game();

    let newGameBtn = document.getElementById("new-game-btn");
    newGameBtn.addEventListener("click", new_game);



    let nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", function(e) {
        console.log("next-btn")

        currentQuestion = game.nextQuestion();

        document.getElementById("question-id").textContent = currentQuestion.question;

    });


});