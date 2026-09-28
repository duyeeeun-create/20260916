// alert('Hello');
// Object 
// 여러값의 키(key)와 값(value)의 쌍으로 묶어 표현하는 자료구조
// 즉, 관련 데이터를 하나로 묶어 놓은 것 


// var height = 188;
// var weight = 85;
// var myname = "gildong"
// var age = 50;



// console.log( 'height:', height); //188
// height = 190;
// var friendHeight =  height; // 깊은 복사
// console.log( 'friendHeight :', friendHeight );

// friendHeight= 200;
// console.log( 'height:', height); //190
// console.log( 'friendHeight :', friendHeight ); //200

// var man = {
//     height: 188, weight: 85, myname: "gildong", age: 50
// }
// console.log("man:",man);

// var friendman = man; // 얕은 복사
// console.log(" friendman:", friendman);
// friendman.myname = "chanho";

// console.log("-----------------------");
// console.log("man:",man);
// console.log(" friendman:", friendman);

// // 참조타입을 깊은 복사 방법?
// var obj1={
//     myName: "gildong"
// }
// // var obj2 = obj1; //얕은 복사

// //깊은 복사 방법(스프레드 연산, 전개 연산)
// var obj2={...obj1 };

// obj1.myName = "chanho";
// console.log ('obj1:', obj1);
// console.log ('obj2:', obj2);

// //object 사용방법
// //1.object  선언 방법
// var ourClass ={
//     className: "1학년 1반", classLocation: "4층",
//     classStudentCount:20,
//     classTeacherName: "홍길동"
// }

// //2. object 데이터 조회 방법: .(도트접근 연산자)이용
// console.log('classLocation:', ourClass.classLocation);

// //3.object 데이터 변경 방법 :. (도트접근 연산자)이용
// ourClass.classLocation = "5층";

//4.object 데이터삭제 방법 :delete &.(도트접근 연산자)이용
// delete ourClass.classLocation;
// console.log('ourClass:', ourClass);


// //5.object의 value에는 모든 데이터 타입이 들어갈 수 있다****
// var object01 ={
//     key1: "abc",
//     key2: 100, key3: 3.14,
//      key4:{
//         key5: 100, key6:3.1415 key7: [10, 20, 30,{
//             key8:"abc"
//         }]
//      }

// };

//q1.

var number01 = 10;
var number02 = 20;


var number01 = number02;
var temp = number01;
number02 = temp;

console.log( 'number01:', number01);
console.log( 'number02:', number02);