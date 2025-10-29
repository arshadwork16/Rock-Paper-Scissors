let but1 = document.getElementById("but1");
let but2 = document.getElementById("but2");
let but3 = document.getElementById("but3");

but1.addEventListener("click", () => {
    let rand = ["rock", "paper", "scissors"]
    let computer = rand[Math.floor(Math.random() * rand.length)];
    console.log(computer);
    // but1.value = "rock";
    if (but1 && computer === "rock") {
        e = `<span style="color: yellow">It's a TIE </span>`
    }
    else if (but1 && computer === "scissors") {
        e = `<span style="color: green">You WIN </span>`
    }
    else if (but1 && computer === "paper") {
        e = `<span style="color: red"> You LOSE</span>`
    }

    let win = document.getElementsByClassName("Win")[0];

    let output = `
    Player Choice : Rock <br>
    Computer Choice : ${computer} <br>
    <span style="text-align: center; display: block;"><b>${e}</b></span>`

    let ResultBox = document.querySelector(".Result");
    ResultBox.innerHTML = "";

    let res = document.createElement("span");
    res.innerHTML = output;
    ResultBox.append(res);

    if (computer === "scissors") {
        let n = document.querySelector(".Win p");
        n.innerHTML = parseInt(n.innerHTML) + 1;
    }
    else if(computer === "paper"){
        let l = document.querySelector(".Loss p");
        l.innerHTML = parseInt(l.innerHTML) + 1; 
    }
    else{
        let t = document.querySelector(".Tie p");
        t.innerHTML = parseInt(t.innerHTML) + 1;
    }

})
but2.addEventListener("click", () => {
    let rand = ["rock", "paper", "scissors"]
    let computer = rand[Math.floor(Math.random() * rand.length)];
    console.log(computer);

    if (but2 && computer === "paper") {
        e = `<span style="color: yellow">It's a TIE </span>`;
    }
    else if (but2 && computer === "rock") {
        e = `<span style="color: green">You WIN </span>`;
    }
    else if (but2 && computer === "scissors") {
        e = `<span style="color: red"> You LOSE</span>`;
    }

    let output = `
    Player Choice : Paper <br>
    Computer Choice : ${computer} <br>
    <span style="text-align: center; display: block;"><b>${e}</b></span>`

    let ResultBox = document.querySelector(".Result");
    ResultBox.innerHTML = "";

    let res = document.createElement("span");
    res.innerHTML = output;
    ResultBox.append(res);

    if (computer === "rock") {
        let n = document.querySelector(".Win p");
        n.innerHTML = parseInt(n.innerHTML) + 1;
    }
    else if(computer === "scissors"){
        let l = document.querySelector(".Loss p");
        l.innerHTML = parseInt(l.innerHTML) + 1; 
    }
    else{
        let t = document.querySelector(".Tie p");
        t.innerHTML = parseInt(t.innerHTML) + 1;
    }

})
but3.addEventListener("click", () => {
    let rand = ["rock", "paper", "scissors"]
    let computer = rand[Math.floor(Math.random() * rand.length)];
    console.log(computer);
    if (but3 && computer === "scissors") {
        e = `<span style="color: yellow">It's a TIE </span>`;
    }
    else if (but3 && computer === "paper") {
        e = `<span style="color: green">You WIN </span>`;
    }
    else if (but3 && computer === "rock") {
        e = `<span style="color: red"> You LOSE</span>`;
    }

    let output = `
    Player Choice : Scissors <br>
    Computer Choice : ${computer} <br>
    <span style="text-align: center; display: block;"><b>${e}</b></span>`

    let ResultBox = document.querySelector(".Result");
    ResultBox.innerHTML = "";

    let res = document.createElement("span");
    res.innerHTML = output;
    ResultBox.append(res);

    if (computer === "paper") {
        let n = document.querySelector(".Win p");
        n.innerHTML = parseInt(n.innerHTML) + 1;
    }
    else if(computer === "rock"){
        let l = document.querySelector(".Loss p");
        l.innerHTML = parseInt(l.innerHTML) + 1; 
    }
    else{
        let t = document.querySelector(".Tie p");
        t.innerHTML = parseInt(t.innerHTML) + 1;
    }
})
