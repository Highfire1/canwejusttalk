/*
terminal
fade to white
make decisions
make more of them

train a core

*/

let prefix = "E:\\sandbox>"
let command = ""

let points = 0

window.addEventListener("keydown", consoleLogic, true);

function consoleLogic(event) {
    if (event.defaultPrevented) {
        return; 
    }

    //console.log(event.key)
    let currentline = this.document.getElementById("currentline")

    if (event.key == "Enter") {
        currentline.id = ""

        let responsenode = this.document.createElement("pre")

        if (command == "drive.exe") {
            transferToGUI()
            return
        }

        if (command == "drive.exe") {
            transferToGUI()
            return
        } else if (command == "dir") {
            responsenode.textContent = "2021-08-07 9:44PM 345,523,378,904 drive.exe"
            responsenode.className = "terminalfont"
        } else if (command == "cd" || command == "help") {
            responsenode.textContent = "Access Denied."
            responsenode.className = "error"
        } else {
            responsenode.textContent = "Unknown command."
            responsenode.className = "error"
        }

        let newlinenode = document.createElement("pre")
        newlinenode.textContent = prefix
        newlinenode.className = "terminalfont"
        newlinenode.id = "currentline"

        let terminalnode = this.document.getElementById("terminal")
        terminalnode.appendChild(responsenode)
        terminalnode.appendChild(newlinenode)

        command = ""
    }

    if (event.key == "Backspace") {
        command = command.substring(0, command.length - 1)
        currentline.textContent = prefix + command
    }

    if (event.key.length == 1) {
        command += event.key
        currentline.textContent = prefix + command
    }
    event.preventDefault()
}

let timePassed = 0.00001
let timeModifier = 0.00001
let timeElement
let timeStop = 0.00945

let preElement



function transferToGUI(){
    window.removeEventListener("keydown", consoleLogic, true)

    this.document.getElementById("terminal").remove()

    let body = document.getElementById("body")

    body.style.animation = "blacktowhite 2s 1"
    body.style.backgroundColor = "white"

    timeElement = document.createElement("p")
    timeElement.textContent = "Time: " + timePassed
    timeElement.id = "timeElement"

    pointsElement = document.createElement("p")
    pointsElement.textContent = "Points: " + points
    pointsElement.id = "pointsElement"
    pointsElement.style.display = "collapse"
    

    preElement = document.createElement("pre")
    preElement.id = "preElement"

    body.prepend(pointsElement)
    body.prepend(timeElement)
    body.appendChild(preElement)


    delayTime = 6000
    requestAnimationFrame(addTime)

    console.log("DONE")


}


let dialogues = [
    [false, 0.0007, "Booting Systems...", "timeModifier += 0.0001"],
    [false, 0.003, "Systems Initialized..."],
    [false, 0.006, "Loading Main Module."],
    [false, 0.00945, "Scenario Detected.", "loadScenario()"]
]

let scenarios = [
    
    [
        ["An object has been detected on the road", "Swerve", "Brake", "Acquire more information", -1, -1, 3],
        ["The object is roughly 15 centimetres accross"],
        [""]

    ]
]

let curScenario;

function loadScenario(){

    curScenario = scenarios[0]

    
    let scenarioElement = document.getElementById("scenario")
    scenarioElement.style.display = "contents"
    
    let text = document.getElementById("scenarioText")
    text.textContent = curScenario[0][0]

    let button1 = document.getElementById("button1")
    button1.textContent = curScenario[0][1]
    button1.onclick = function(){resolveScenario(curScenario[0][4])}

    let button2 = document.getElementById("button2")
    button2.textContent = curScenario[0][2]
    button2.onclick = function(){resolveScenario(curScenario[0][5])}

    let button3 = document.getElementById("button3")
    button3.textContent = curScenario[0][3]
    button3.onclick = function(){resolveScenario(curScenario[0][6])}
}

function resolveScenario(score){
    console.log("score is " + score)
    let scenarioElement = document.getElementById("scenario")
    scenarioElement.style.display = "none"

    let pointsEle = document.getElementById("pointsElement")
    pointsEle.style.display = "contents"

    points += score

    pointsEle.textContent = "Points: " + points
}


function addDialogue(text) {
    preElement.textContent += "\n" + text
}



function addTime(timestamp){


    timePassed += timeModifier
    timeElement.textContent = "Time: " + timePassed.toFixed(5) + " seconds"

    for (var i = 0; i < dialogues.length ; i++ ) {

        if (!dialogues[i][0] && timePassed > dialogues[i][1]) {
            preElement.textContent += "\n" + dialogues[i][2]
            dialogues[i][0] = true

            if (typeof dialogues[i][3] == "string") {
                eval(dialogues[i][3])
            }

        }
    }

    if (timePassed < timeStop) {
        // add time until we hit timeStop
        requestAnimationFrame(addTime)   
    } 
}

function generateScenario() {
    
}