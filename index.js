const input = document.getElementById("input1")

function chek(){
    let chekked = input.getAttribute("type")

    if(chekked == "text"){
        input.setAttribute("type", "password")
    }
    else{
        input.setAttribute("type", "text")
    }
}
