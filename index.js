let InputIdValue = document.querySelector("#id")
let InputPasswordValue = document.querySelector("#password")
let ButtonValue = document.querySelector("#btn")

ButtonValue.addEventListener("click", Onclick);
// 이벤트를 넣겠다 
function Onclick(){
    alert("ID : "+ InputIdValue.value +"\n"+ "Password" + InputPasswordValue.value);
    // innertext는 괄호 안, value는 input
}