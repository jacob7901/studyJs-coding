function enjoyGame(num) {
    console.log("========== Game Start ==========");
    let a = num % 3;
    if (a == 0) {
        let b = num % 9;
        if (b == 0) {
            console.log(num + " : 짝짝");
        } else {
            console.log(num + " : 짝");
        }
    } else {
        console.log(num + ": 통과");
    }
}

// give me a function which generates random number between 1 to 10.
function getRandomNumber() {
    const num = Math.floor(Math.random() * 100) + 1;
    enjoyGame(num);
    // console.log(num);
}

document.querySelector(".gameStart").addEventListener("click", getRandomNumber);
// document.querySelector(".gameStart").addEventListener("click", enjoyGame());
