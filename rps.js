let but1 = document.getElementById("but1");
let but2 = document.getElementById("but2");
let but3 = document.getElementById("but3");

but1.addEventListener("click", () => {
    let rand = ["rock", "paper", "scissors"]
    let computer = rand[Math.floor(Math.random() * rand.length)];
    console.log(computer);
    // but1.value = "rock";
    if (but1 && computer === "rock") {
        e = `Your Choice : Rock & Computer Choice : ${computer} > Rock and Rock It's a TIE`
    }
    else if (but1 && computer === "scissors") {
        e = `Your Choice : Rock & Computer Choice : ${computer} > Rock smash Scissors You WIN Computer LOSE`
    }
    else if (but1 && computer === "paper") {
        e = `Your Choice : Rock & Computer Choice : ${computer} > Paper wraps Rock You LOSE Computer Win`
    }
    let d = document.createElement("div");
    d.innerText = e;
    let JS = document.querySelector(".JS").append(d);
    d.style.padding = "5px";
    "<br>"

})
but2.addEventListener("click", () => {
    let rand = ["rock", "paper", "scissors"]
    let computer = rand[Math.floor(Math.random() * rand.length)];
    console.log(computer);

    if (but2 && computer === "paper") {
        e = `Your Choice : Paper & Computer Choice : ${computer} > paper and paper It's a TIE`;
    }
    else if (but2 && computer === "rock") {
        e = `Your Choice : paper & Computer Choice : ${computer} > Paper wrap Rock You WIN Computer LOSE`;
    }
    else if (but2 && computer === "scissors") {
        e = `Your Choice : Paper & Computer Choice : ${computer} > Scissors cut Paper You LOSE Computer Win`;
    }

    let d = document.createElement("div");
    d.innerText = e;
    let JS = document.querySelector(".JS").append(d);
    d.style.padding = "5px";
    "<br>"

})
but3.addEventListener("click", () => {
    let rand = ["rock", "paper", "scissors"]
    let computer = rand[Math.floor(Math.random() * rand.length)];
    console.log(computer);
    if (but3 && computer === "scissors") {
        e = `Your Choice : Scissors & Computer Choice : ${computer} > Scissors and Scissors It's a TIE`;
    }
    else if (but3 && computer === "paper") {
        e = `Your Choice : Scissors & Computer Choice : ${computer} > Scissors cut Paper You WIN Computer LOSE`;
    }
    else if (but3 && computer === "rock") {
        e = `Your Choice : Scissors & Computer Choice : ${computer} > Rock smash Scissors You LOSE Computer Win`;
    }

    let d = document.createElement("div");
    d.innerText = e;
    let JS = document.querySelector(".JS").append(d);
    d.style.padding = "5px";
    "<br>"
})