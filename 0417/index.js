let Button0 = document.querySelector('#zero');
let Button1 = document.querySelector('#one');
let Button2 = document.querySelector('#two');
let Button3 = document.querySelector('#three');
let Button4 = document.querySelector('#four');
let Button5 = document.querySelector('#five');
let Button6 = document.querySelector('#six');
let Button7 = document.querySelector('#seven');
let Button8 = document.querySelector('#eight');
let Button9 = document.querySelector('#nine'); 

let CalculatorTag = document.querySelector('#CalculatorValue')

let realValue = document.querySelector('#realValue')

let CalculatorValue1 = ""; 
let CalculatorValue2 = ""; 
let Secondflag = false; //boolean
let MultSecondflag = false;
let DivSecondflag = false;
let RemainSecondflag = false;
let sum = 0;

function OnClickButton(value){
    CalculatorValue1 += value.target.innerText;
    // 버튼 안의 글
    CalculatorTag.innerText = CalculatorValue1;
}

Button0.addEventListener("click", OnClickButton);
Button1.addEventListener("click", OnClickButton);
Button2.addEventListener("click", OnClickButton);
Button3.addEventListener("click", OnClickButton);
Button4.addEventListener("click", OnClickButton);
Button5.addEventListener("click", OnClickButton);
Button6.addEventListener("click", OnClickButton);
Button7.addEventListener("click", OnClickButton);
Button8.addEventListener("click", OnClickButton);
Button9.addEventListener("click", OnClickButton);

function PlusButton(){
    sum += Number(CalculatorValue1);
    // sum은 계산 값 저장, number은 값을 받ㄴㄴ데 왜 바꿧냐? 이미 초기화를 했기 때문에 안됨
    CalculatorTag.innerText = "0";
    CalculatorValue1 ="";
    // 초기화 그냥 하면 문자에 더해짐
    realValue.innerText = sum;
    // 값을 띄우기 위해 
}

function MinusButton(){
    if(Secondflag){
        //세컨드 플래그가 트루면 출력
        sum -= Number(CalculatorValue1);
        CalculatorTag.innerText = "0";
        CalculatorValue1 = "";
        realValue.innerText = sum;
    } else {
        sum += Number(CalculatorValue1)
        CalculatorTag.innerText = "0";
        CalculatorValue1 = "";
        realValue.innerText = sum;
    }
    Secondflag = !Secondflag;
}

function MultButton(){
    if(Secondflag){
        //세컨드 플래그가 트루면 출력
        sum *= Number(CalculatorValue1);
        CalculatorTag.innerText = "0";
        CalculatorValue1 = "";
        realValue.innerText = sum;
    } else {
        sum += Number(CalculatorValue1)
        CalculatorTag.innerText = "0";
        CalculatorValue1 = "";
        realValue.innerText = sum;
    }
    MultSecondflag = !MultSecondflag; //! = 아니다 트루 펄스를 서로 바꾼다
}
function DivButton(){
    if(DivSecondflag){
        //세컨드 플래그가 트루면 출력
        sum /= Number(CalculatorValue1);
        CalculatorTag.innerText = "0";
        CalculatorValue1 = "";
        realValue.innerText = sum;
    } else {
        sum += Number(CalculatorValue1)
        CalculatorTag.innerText = "0";
        CalculatorValue1 = "";
        realValue.innerText = sum;
    }
    DivSecondflag = !DivSecondflag; //! = 아니다 트루 펄스를 서로 바꾼다
}

function RemainButton(){
    if(RemainSecondflag){
        //세컨드 플래그가 트루면 출력
        sum %= Number(CalculatorValue1);
        CalculatorTag.innerText = "0";
        CalculatorValue1 = "";
        realValue.innerText = sum;
    } else {
        sum += Number(CalculatorValue1)
        CalculatorTag.innerText = "0";
        CalculatorValue1 = "";
        realValue.innerText = sum;
    }
    RemainSecondflag = !RemainSecondflag; //! = 아니다 트루 펄스를 서로 바꾼다
}

function Result(){
    if(Secondflag){
        sum -= Number(CalculatorValue1)
        CalculatorTag.innerText = "0";
        CalculatorValue1 = "";
        realValue.innerText = sum;
        Secondflag = !Secondflag;

    }else if (MultSecondflag) { //곱하기가 입력됙 위해 구분
        sum *= Number(CalculatorValue1);
        CalculatorTag.innerText = "0";
        CalculatorValue1 = "";
        realValue.innerText = sum;
        MultSecondflag = !MultSecondflag;
    }else if(DivSecondflag){
        sum /= Number(CalculatorValue1);
        CalculatorTag.innerText = "0";
        CalculatorValue1 = "";
        realValue.innerText = sum;
        DivSecondflag = !DivSecondflag;
    }else if(RemainSecondflag){
        sum %= Number(CalculatorValue1);
        CalculatorTag.innerText = "0";
        CalculatorValue1 = "";
        realValue.innerText = sum;
        RemainSecondflag = !RemainSecondflag;
    }
     else {
        sum += Number(CalculatorValue1)
        CalculatorTag.innerText = "0";
        CalculatorValue1 = "";
        realValue.innerText = sum;
    }

    sum = 0;
}