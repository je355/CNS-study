// //var a = 0;

// let b = 0;
// const c= 0;

//  //type 
//  b = 0; // number(int, float 둘 다 가능) 
//  b = "";//char (문자라는 개념이 없음. 한글자라도 문자열)
//  b = "abc";
//  //String, Char X 

//  b = flase; // if(a>0) while(a < 10) false, true 

//  b = ['dddd', false]; //자료형 수 제한이 없어 오류가 많이 날 수 있는 점....

//  ///////

//  b = {
//     key : "value",
//     arr : [],
//     num : 0,
//  };


// //  b = {
// //     name : "bae",
// //     age : 17,
// //     family : [],
// //  };

//  console.log(b.key); //점 사용 호출 


//  //---------------------------기본문법--------------//

// for(let index = 0; index<array.length; index++){
//     const element = array [index];
// }

// while(true){

// }

// //while을 for 처럼 쓰고 싶다면?
// let a= 0;
// while(a<10){
//     console.log(a);
//     a++
// }


// //스위치문
// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }

//중요중요중요~!~~~!!~!~
let userInfo = [{
    name: "user1",
    age: 17,
},
{
    name: "user2",
    age: 12,
},
{
    name: "user3",
    age: 15,
},
{
    name: "user4",
    age: 11,
},
{
    name: "user5",
    age: 10,
}
];

for(let index = 0; index<userInfo.length; index++){
    console.log("name : "+userInfo[index].name + ", age : "+userInfo[index].age);
}

//map, foreach
function mapUser(){
    userInfo.map((e) => {
        e.age++;
        console.log(e)
    });
    console.log(userInfo)
}

function foreachUser(){
    userInfo.forEach((e) => {
        e.age++;
        console.log(e)
    });
    console.log(userInfo)
}