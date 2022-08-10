// Part One
function changeBorder() {
    let akatsuki = document.querySelector (".akatsuki")

    if (akatsuki.style.borderColor != "") {
        akatsuki.style.borderColor =""
    }
    else {akatsuki.style.borderColor = "red"}
}

// Part Two
function verify(){
    let sticker1 = document.querySelector(".sticker1").value
    let sticker2 = document.querySelector(".sticker2").value
    let sticker3 = document.querySelector(".sticker3").value
    let finalresult = document.querySelector(".finalresult")
    let total = parseInt(sticker1)+parseInt(sticker2)+parseInt(sticker3)
    if (total > 10){
        finalresult.innerHTML = "Llevas demasiados stickers";
        finalresult.style.color = "#7b0ef0"
    } else {
        finalresult.innerHTML = "Llevas" + " " + total + " " + "stickers.";
    }
    console.log (total)
}


// Part Three
   function go(){
     var num1 = document.querySelector('#num-1').value
     var num2 = document.querySelector('#num-2').value
     var num3 = document.querySelector('#num-3').value
     let total = num1 + num2 + num3
     let result = document.querySelector('#result')
    
     if (total === "911"){
     result.innerHTML = "password 1 correcto"
     result.style.color = "#e2b1fa"

     } else if(total === "714") {
     result.innerHTML = "password 2 correcto"
     result.style.color = "#abf5ca"

     } else {
     result.innerHTML = "password incorrecto "
     result.style.color = "#f5536b"
     }
    }
