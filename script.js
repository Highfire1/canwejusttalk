/*
terminal
fade to white
make decisions
make more of them

train a core

*/

let prefix = "E:\\sandbox>"
let command = ""


window.addEventListener("keydown", function (event) {
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
        } else if (command == "cd") {
            responsenode.textContent = "Access Denied"
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
}, true);

function transferToGUI(){
    this.document.getElementById("terminal").remove()

    let body = document.getElementById("body")

    body.style.animation = "blacktowhite 2s 1"
    body.style.backgroundColor = "white"

    let timeelement = document.createElement("p")
    timeelement.textContent = "Time: 0.000023"
    timeelement.id = "timeelement"

    body.appendChild(timeelement)


}


