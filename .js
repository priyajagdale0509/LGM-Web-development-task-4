function dis(val) {
    document.getElementById("screen").value += val
}

function solve() {
    let x = document.getElementById("screen").value
    let y = eval(x)
    document.getElementById("screen").value = y
}

function clr() {
    document.getElementById("screen").value = ""
}

function sqrt() {
    let x = document.getElementById("screen").value
    let y = Math.sqrt(x)
    document.getElementById("screen").value = y
}