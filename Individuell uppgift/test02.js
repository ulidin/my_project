const endpoint = 'https://quizapi.io/api/v1/questions?apiKey=javwwMCD7lG5HQ0D2L01kXHB6llRG5WFwsTkwOwE&limit=5'

const arr = ["test", 0];

fetch(endpoint)
    .then(response => response.json())
    .then(data => arr.push(...data));

for (let i = 0; i < arr.length; i++) {
    let aaa = arr[i];
    console.log(aaa);

}
console.log("utanför loopen: " + arr);