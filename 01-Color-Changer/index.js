// This Is My Method ->

// let red = document.getElementById("red")
// let green = document.getElementById("green")
// let blue = document.getElementById("blue")
// let random = document.getElementById("blue")

// let hex = 'abcdef0123456789'
// let color = '#'

// for (let i = 0; i < 5; i++) {
//     color += Math.floor(Math.random() * 5 + 1)[i];
//     console.log(color);
    
// }

// green.addEventListener('click',()=>{
//     document.body.style.backgroundColor = "green"
// })

// red.onclick = function (){
//     document.body.style.backgroundColor = "red"
// }
// blue.onclick = function (){
//     document.body.style.backgroundColor = "blue"
// }


// This Is Tim's Method ->

const body = document.getElementsByTagName('body')[0]

function setColor (name){
    body.style.backgroundColor = name
}

function randomColor(){
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    const color = `rgb(${red}, ${blue}, ${green})` 

    body.style.backgroundColor = color
}
randomColor()