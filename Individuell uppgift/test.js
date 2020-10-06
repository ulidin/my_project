document.addEventListener("DOMContentLoaded", function(e) {



    let chkbox = document.getElementsByClassName("chkbox");

    if (chkbox) {
        for (let x = 0; x < chkbox.length; x++) {
            chkbox[x].style.visibility = "hidden";
        }

    }


    let arrData = [];

    // Button go get new question to the game via fetch
    let newGameBtn = document.getElementById("new-game-btn");
    newGameBtn.addEventListener("click", function(e) {
        arrData = [];
        fetch('https://quizapi.io/api/v1/questions?apiKey=javwwMCD7lG5HQ0D2L01kXHB6llRG5WFwsTkwOwE&limit=10')
            // .then(response => response.json())
            // .then(data => console.log(data))

        .then(response => response.json())
            .then(data => arrData.push(...data));

        console.log(arrData);

    });


    //Button to go back to previus question
    let backBtn = document.getElementById("back-btn");
    backBtn.addEventListener("click", function(e) {
        console.log("back-btn")
        for (let i = 10; i >= arrData.length; i--) {

            let question = arrData[i].question;
            let chooseAnswer = arrData[i].answers;

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
            }
        }
    });






    //Button to go forwar to next question
    let nextBtn = document.getElementById("next-btn");

    nextBtn.addEventListener("click", function(e) {
        console.log("next-btn")

        for (let i = 0; i <= arrData.length; i++) {
            // console.log("inne i next-btn: " + arrData);

            let question = arrData[i].question;
            let chooseAnswer = arrData[i].answers;

            // console.log(question);
            // console.log(chooseAnswer);

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

            }

        }
    })


})