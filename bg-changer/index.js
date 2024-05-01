let red = document.getElementById("red")
let green = document.getElementById("green")
let blue = document.getElementById("blue")
let random = document.getElementById("blue")

green.addEventListener('click',()=>{
    document.body.style.backgroundColor = "green"
})

red.onclick = function (){
    document.body.style.backgroundColor = "red"
}
blue.onclick = function (){
    document.body.style.backgroundColor = "blue"
}

