document.addEventListener("DOMContentLoaded", function(e) {


    let chkbox = document.getElementsByClassName("chkbox");

    if (chkbox) {
        for (let x = 0; x < chkbox.length; x++) {
            chkbox[x].style.visibility = "hidden";
        }

    }


    let backBtn = document.getElementById("back-btn");
    backBtn.addEventListener("click", function(e) {
        for (let i = 0; i < 2; i--) {

            let question = data[i].question;
            let chooseAnswer = data[i].answers;

            console.log(question);
            console.log(chooseAnswer);
        }
    });





    let newGameBtn = document.getElementById("new-game-btn");

    newGameBtn.addEventListener("click", function(e) {});



    let nextBtn = document.getElementById("next-btn");

    nextBtn.addEventListener("click", function(e) {


        fetch('https://quizapi.io/api/v1/questions?apiKey=javwwMCD7lG5HQ0D2L01kXHB6llRG5WFwsTkwOwE&limit=10')
            // .then(response => response.json())
            // .then(data => console.log(data))

        .then(response => response.json())
            .then(data => {
                // console.log(data);

                for (let i = 0; i < 2; i++) {

                    let question = data[i].question;
                    let chooseAnswer = data[i].answers;

                    console.log(question);
                    console.log(chooseAnswer);

                    document.getElementById("question-id").textContent = question;

                    let anwer_a = document.getElementById("answer-id-a");
                    let anwer_b = document.getElementById("answer-id-b");
                    let anwer_c = document.getElementById("answer-id-c");
                    let anwer_d = document.getElementById("answer-id-d");
                    let anwer_e = document.getElementById("answer-id-e");
                    let anwer_f = document.getElementById("answer-id-f");

                    for (let x = 0; x < chkbox.length; x++) {

                        anwer_a.textContent = chooseAnswer.answer_a;
                        anwer_b.textContent = chooseAnswer.answer_b;
                        anwer_c.textContent = chooseAnswer.answer_c;
                        anwer_d.textContent = chooseAnswer.answer_d;
                        anwer_e.textContent = chooseAnswer.answer_e;
                        anwer_f.textContent = chooseAnswer.answer_f;

                        if (chooseAnswer.answer_a !== null) {
                            console.log("Inne i if satsen: " + chooseAnswer.answer_a)
                                // chkbox = document.getElementsByClassName("chkbox");

                            // if (anwer_a.textContent !== "") {
                            //     console.log("Inne i if satsen: " + anwer_a.textContent)
                            chkbox[x].style.visibility = "visible";
                        }
                    }

                    // for (let x = 0; x < chkbox.length; x++) {
                    //     console.log("Vilket värde är det? " + anwer_f);
                    //     if (anwer_f === null) {
                    //         chkbox[x].style.visibility = "hidden";
                    //         console.log("Vilket värde är det inne i if? " + anwer_f);
                    //     }


                    // }



                    // // let tableBody = document.getElementById("tBody");
                    // // let newTr = document.createElement("TR");
                    // // let newTd = document.createElement("TD");
                    // // let newChkBox = document.createElement("INPUT")
                    // // newChkBox.setAttribute("type", "checkbox");

                    // // newTd = document.createElement("TD");
                    // // newTd.textContent = chooseAnswer.answer_a;
                    // // newTr.appendChild(newTd);


                    // // newTd = document.createElement("TD");
                    // // newTd.textContent = chooseAnswer.answer_b;
                    // // newTr.appendChild(newTd);


                    // // newTd = document.createElement("TD");
                    // // newTd.textContent = chooseAnswer.answer_c;
                    // // newTr.appendChild(newTd);


                    // // newTd = document.createElement("TD");
                    // // newTd.textContent = chooseAnswer.answer_d;
                    // // newTr.appendChild(newTd);


                    // // newTd = document.createElement("TD");
                    // // newTd.textContent = chooseAnswer.answer_e;
                    // // newTr.appendChild(newTd);


                    // // newTd = document.createElement("TD");
                    // // newTd.textContent = chooseAnswer.answer_f;
                    // // newTr.appendChild(newTd);

                    // // tableBody.appendChild(newTr);





                    // let id = data[i].id;
                    // let question = data[i].question;
                    // let difficulty = data[i].difficulty;
                    // let answer_a = data[i].answers.answer_a;
                    // let answer_b = data[i].answers.answer_b;
                    // let answer_c = data[i].answers.answer_c;
                    // let answer_d = data[i].answers.answer_d;
                    // let answer_e = data[i].answers.answer_e;
                    // let answer_f = data[i].answers.answer_f;
                    // let correct_answers = data[i].correct_answers;


                    // let answerA = document.getElementById("answer-id-a");
                    // answerA.textContent = answer_a;

                    // let answerB = document.getElementById("answer-id-b");
                    // answerB.textContent = answer_b;

                    // let answerC = document.getElementById("answer-id-c");
                    // answerC.textContent = answer_c;

                    // let answerD = document.getElementById("answer-id-d");
                    // answerD.textContent = answer_d;

                    // let answerE = document.getElementById("answer-id-e");
                    // answerE.textContent = answer_e;

                    // let answerF = document.getElementById("answer-id-f");
                    // answerF.textContent = answer_f;

                    // console.log("ID: " + id);
                    // console.log("Difficulty: " + difficulty);
                    // console.log("Question: " + question);
                    // console.log("Answer a: " + answer_a);
                    // console.log("Answer b: " + answer_b);
                    // console.log("Answer c: " + answer_c);
                    // console.log("Answer d: " + answer_d);
                    // console.log("Answer e: " + answer_e);
                    // console.log("Answer f: " + answer_f);
                    // console.log("Correct answer: " + correct_answers);


                }




            });

    })


})