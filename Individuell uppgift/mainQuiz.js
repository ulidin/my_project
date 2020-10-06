document.addEventListener("DOMContentLoaded", function(e) {

    class Game {
        constructor(questions) {
            this.questions = [];
            this.set_questions(questions);
            this.start();

        }
        start() {
            this.print_questions();
        }

        print_questions() {
            for (let question of this.questions) {
                question.print();
            }
        }


        get_question_by_id(id) {
            for (let question of this.questions) {
                if (question.id == id) {
                    return question;
                }
            }
        }

        get_company_by_name(quest) {
            for (let question of this.questions) {
                if (question.quest == quest) {
                    return question;
                }
            }
        }


        set_questions(questions_json) {
            let questions = JSON.parse(questions_json);
            for (let question of questions) {
                this.questions.push(new Question(question));
            }
        }

        //next_btn(){};

        //back_btn(){};

        //new_game_btn(){};

    };


    class Question {
        constructor(question) {
            this.id = question.id;
            this.question = question.quest;
            this.answer_a = question.answer_a;
            this.answer_b = question.answer_b;
            this.answer_c = question.answer_c;
            this.answer_d = question.answer_d;
            this.answer_e = question.answer_e;
            this.answer_f = question.answer_f;
        }
        print() {
            console.log("id: " + this.id);
            console.log("quest: " + this.question);
            console.log("answer_a: " + this.answer_a);
            console.log("answer_b: " + this.answer_b);
            console.log("answer_c: " + this.answer_c);
            console.log("answer_d: " + this.answer_d);
            console.log("answer_e: " + this.answer_e);
            console.log("answer_f: " + this.answer_f);
            console.log("----------------------------");


        }


    }




    let questions = JSON.stringify([{
            id: 131,
            quest: "Which character is used to indicate an end tag?",
            answer_a: "/",
            answer_b: "<",
            answer_c: "*",
            answer_d: "^",
            answer_e: null,
            answer_f: null

        },
        {
            id: 132,
            quest: "Which command is used to create an empty file.",
            answer_a: "mtfile",
            answer_b: "mkfile",
            answer_c: "file",
            answer_d: "touch",
            answer_e: null,
            answer_f: null

        },
        {
            id: 133,
            quest: "Which command can introduce clock delay?",
            answer_a: "sleep",
            answer_b: "wait",
            answer_c: "suspend",
            answer_d: "delay",
            answer_e: null,
            answer_f: null

        },
    ]);



    let game = new Game(questions);

    let nextBtn = document.getElementById("next-btn");

    nextBtn.addEventListener("click", function(e) {
        console.log("next-btn")
            //let game = new Game(questions);
        document.getElementById("question-id").textContent = game.start();

    });

});