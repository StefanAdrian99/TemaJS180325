const colorContainer = document.getElementById("colorContainer");
const clickedCounter = document.getElementById("clickedCounter");
const previousColorSwitch = document.getElementById("previousColorSwitch");
const nextColorSwitch = document.getElementById("nextColorSwitch");
const resetSwitch = document.getElementById("resetSwitch");

const colors = ["#AD636C", "#009B72", "#6761AB", "#347E8D", "#798186"];


let counter = 0;


nextColorSwitch.onclick = function () {
    if (counter >= 4) return; 

    counter++;
    nextColorSwitch.textContent = "Next";
    
    colorContainer.style.backgroundColor = colors[counter];
    clickedCounter.textContent = `Clicked ${counter} times`;
};


resetSwitch.onclick = function(){
    counter = 0;
    colorContainer.style.backgroundColor = colors[counter];
    clickedCounter.textContent = `Clicked ${counter} times`;
    nextColorSwitch.textContent = "Click me";
}

previousColorSwitch.onclick = function(){
    if(counter > 0){
        counter--;
        colorContainer.style.backgroundColor = colors[counter];
        clickedCounter.textContent = `Clicked ${counter} times`;
    }
    if(counter === 0){
        nextColorSwitch.textContent = "Click me";
    }

}

