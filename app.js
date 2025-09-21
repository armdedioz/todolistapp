const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const clickSound = new Audio();
const checkedSound = new Audio();



// sound fx
clickSound.src = "sounds/click.mp3";
checkedSound.src = "sounds/xp.mp3";
checkedSound.volume = 0.6;
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        clickSound.currentTime = 0;
        clickSound.play();
    }
    inputBox.value = "";
     saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        const isChecked = e.target.classList.contains("checked");
        const eitherSound = isChecked ? checkedSound : clickSound;
        eitherSound.currentTime = 0;
        eitherSound.play();
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        clickSound.currentTime = 0;
        clickSound.play();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
