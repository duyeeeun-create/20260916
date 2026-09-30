// 비교 연산자: ==(같다), !=(같지않다), >, >=, < , <=, ===,!==
// 논리 연산자: &&, ||, !
// 증감 연산자: ++,--


/*
Q. 범퍼카 탑승 가능 판별하기
놀이동산에서 범퍼카는 신장이 120cm 이상인 어린이만 탑승할 수있다
신장을 입력하면 범퍼카를 탑승 가능 여부를 알려주는 프로그램 만들기
(탑승 가능은 true, 탑승 불가능은 false로 출력)
 */

// var height = Number(prompt('어린이의 신장을 입력하세요.'));
// // console.log(`탑승가능 여부: ${height >= 120}`);

// // 비연산자 && 피연산자 => (둘 다 true만 결과도 true)
// // 120cm 이상이고 180cm미만 탑승가능
// console.log(`탑승가능 여부: ${height >= 120 && height < 180}`);
 
// var num1 = 5;
// var num2 = 8;

// console.log (num1 != num2); //true 
// console.log (num1 == num2); // false
// console.log (num1 > num2);  // false
// console.log (num1 >= num2);  // false
// console.log (num1 < num2);  //true 
// console.log (num1 <= num2);  //true  둘중 하나 맞아서

// // ==, != (지양) vs ===, !== (지향)
// console.log(`5 == '5': ${5 == '5'}`); // true가 나와버림 
// console.log(`5 ==='5': ${5 ==='5'}`);  // false

// console.log(`${5 != '6'}`);  // true
// console.log(`${5 !== '6'}`);  // true

//논리 연산자 &&(and), ||(or), !(not)
//&&(and) : 모두 true여야 결과는 true
// : true && true => true
// false && true =>false , / true && false =>false 

//||(or) : 하나라도 true면 결과는 true
// true || false => true, false||false =>false

//!(NOT) : 현재 상태를 부정
// : !true => false
// : !false => true
// : !!false => false

// Q. 컴퓨터 홀짝 게임 해보자!
// var random = Math.random(); //난수 발생 (0.0~1.0)
// // console.log(`random: ${random}`);

// random = parseInt(random * 10);
// // console.log(`random: ${random}`); 
// var userSelectednumber =Number(prompt('1. 짝       2.홀'));
// console.log(`Win: ${(random % 2 === 0)&& (userSelectednumber === 1) }`); //O
// console.log(`Win: ${(random % 2 !== 0) && (userSelectednumber === 2) }`); //O

// console.log(`Lose: ${(random % 2 === 0)&& (userSelectednumber === 2) }`); //X
// console.log(`Lose: ${(random % 2 !== 0) && (userSelectednumber === 1) }`); //X

// console.log(`random: ${random}`);
// console.log(`userSelectednumber: ${userSelectednumber}`);

// //Q (10 > -10) && ( 3.14 > 0 ) || (-1 == 0)
// // true && true || false
// // true || false
// // true 
// console.log(`${(10 > -10) && ( 3.14 > 0 ) || (-1 == 0)}`); // true 

// Q. 다음 지문을 읽고 밑줄 친 부분에 맞는 코드를 완성하시오.
// 사무실 냉/ 난방기는 실내 온도가 16도 이하 또는 28도 초과시 작동한다
// temperature <= (   16 ) ( || ) tmperature > (  28 ) 

// 자동 증감 연산자: ++ , --
// var score = 80;
// console.log(`score: ${score}`);

// // score = score + 1;
// // score += 1;
// score++;
// console.log(`score: ${score}`); //81

// score--;
// console.log(`score: ${score}`); // 80

// var myScore = 90;
// console.log(`myScore: ${myScore}`);

// var  result = ++myScore;
// console.log(`result: ${result}`); //91 

// // var  result = myScore++;
// // console.log(`result: ${result}`); //90 연산자 우선순위때문에 전위 연산자, 후위 연산자 잘 구분해서쓰자!
// // console.log(`myScore: ${myScore}`); //91 

// //삼항(조건식) 연산자: 3개의 항을 사용하는 연산자, 조건 ? 값1 : 값2 ****
// var resultVar = ( 5 > 1 ) ? '5는 1보다 크다' : '5는 1보다 크지 않다';
// // 조건의 결과가 true이면 ? 다음 값이 할당 false면 : 다음게 할당
// console.log(` resultVar: ${resultVar}`); //5는 1보다 크다

// // Q. 사용자가 시험 점수를 입력하고, 점수가 80이상이면 합격 그렇지 않으면 불합격을 출력하자
// var exampleScore = prompt('본인 시험 점수 입력: ');
// var resultMessage = Number(exampleScore) >= 80 ? '합격' : '불합격';
// console.log(`resultMessage: ${resultMessage}`);

// //  120cm 이상이고 180cm미만 탑승가능
// // console.log(`탑승가능 여부: ${height >= 120 && height < 180}`);
// var childHeight = prompt('어린이 신장 입력: ');
// var msg = Number(childHeight) >= 120 && Number(childHeight) <180 ? '탑승가능' : '집에가!';
// console.log(`msg: ${msg}`);


//Q DW마트는 수입과 지출을 입력하면 흑자인지 적자인지 판별하는 프로그램 도입 
// 마트 수익 결과 프로그램

var pluse = prompt('수입 입력하시오: ');
var expense = prompt('지출을 입력하시오: ');
var total = pluse - expense; 
var mart = Number(total) <= 0  ? '적자' : '흑자!';
console.log(`mart: ${mart}`);
