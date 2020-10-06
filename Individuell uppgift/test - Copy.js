document.addEventListener("DOMContentLoaded", function(e) {

    let nextBtn = document.getElementById("next-btn");

    nextBtn.addEventListener("click", function(e) {


        fetch('https://quizapi.io/api/v1/questions?apiKey=javwwMCD7lG5HQ0D2L01kXHB6llRG5WFwsTkwOwE')
            // .then(response => response.json())
            // .then(data => console.log(data))

        .then(response => response.json())
            .then(data => {
                // console.log(data);

                for (let i = 0; i < 1; i++) {

                    let id = data[i].id;
                    let question = data[i].question;
                    let multiple_correct_answers = data[i].multiple_correct_answers;
                    let answer_a = data[i].answers.answer_a;
                    let answer_b = data[i].answers.answer_b;
                    let answer_c = data[i].answers.answer_c;
                    let answer_d = data[i].answers.answer_d;
                    let answer_e = data[i].answers.answer_e;
                    let answer_f = data[i].answers.answer_f;
                    let correct_answer = data[i].correct_answer;
                    let difficulty = data[i].difficulty;


                    let idQuestion = document.getElementById("question-id");
                    idQuestion.innerHTML = question;


                    let answerA = document.getElementById("answer-id-a");
                    answerA.innerHTML = answer_a;

                    let answerB = document.getElementById("answer-id-b");
                    answerB.innerHTML = answer_b;

                    let answerC = document.getElementById("answer-id-c");
                    answerC.innerHTML = answer_c;

                    let answerD = document.getElementById("answer-id-d");
                    answerD.innerHTML = answer_d;

                    let answerE = document.getElementById("answer-id-e");
                    answerE.innerHTML = answer_e;

                    let answerF = document.getElementById("answer-id-f");
                    answerF.innerHTML = answer_f;

                    console.log("ID: " + id);
                    console.log("Difficulty: " + difficulty);
                    console.log("Multiple answers: " + multiple_correct_answers);
                    console.log("Question: " + question);
                    console.log("Answer a: " + answer_a);
                    console.log("Answer b: " + answer_b);
                    console.log("Answer c: " + answer_c);
                    console.log("Answer d: " + answer_d);
                    console.log("Answer e: " + answer_e);
                    console.log("Answer f: " + answer_f);
                    console.log("Correct answer: " + correct_answer);

                }
            });



    })


})