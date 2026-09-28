/*[연산자 종류]
산술 연산자: +,-,*,/,%(나머지),**(제곱승)
할당(대입) 연산자: =, +=,-=, *=, /=, %=
비교 연산자: ==, !=, >, >=, < , <=, ===,!==
논리 연산자: &&, ||, !
증감 연산자: ++,--
삼항 연산자: 3개의 항을 사용하는 연산자,
조건 ? 값1 : 값2
*/
//산술 연산자
//덧셈연산자 
var num1 = 10;
var num2 = 20;
console.log(num1 + num2); //30
console.log(num1 - num2); //-10
console.log(num1 * num2); //200
console.log(num1 / num2); //0.5
console.log(num1 % num2); //10
console.log(10 % 3); //1
console.log(3 ** 2); //9

// Q1 dw전자 회사의 1분기 매출의 총 합을 구하자 프로그램 만드시오
// 사용자 1월, 2월, 3월 매출액을 입력하면 1분기 총합 출력
// var sales1 = Number(prompt('1월 매출 입력:')); //100
// var sales2 = Number(prompt('2월 매출 입력:')); //200
// var sales3 = Number(prompt('3월 매출 입력:')); //300
// console.log('1분기 매출 총합:', (sales1 +sales2 +sales3));

// var sales1 = parseInt(prompt('1월 매출 입력:')); //100
// var sales2 = parseInt(prompt('2월 매출 입력:')); //200
// var sales3 = parseInt(prompt('3월 매출 입력:')); //300
//  console.log('1분기 매출 총합:', (sales1 +sales2 +sales3));

 // 문자열 덧셈
//  console.log("Hello"+"world"); // 덧셈 연결 연산자

//  //뺄셈 연산자
// var num3 = 10;
// var num4 = 20;
// console.log(num3 - num4);

// // Q2 dw전자 회사의 1분기 매출의 총 합을 구하자 프로그램 만드시오
// // 사용자 1분기 매출액과 매입액 입력하면 수익 계산 프로그램 만들어라
// var sales = Number(prompt('1분기 매출 입력:'));
// var purchase = Number(prompt('1분기 매출 입력:'));
// var profit=  sales - purchase;
// console.log('수익:', profit);

// // 곱셈 나눗셈
// //Q. 방의 넓이 구하기- 가로, 세로 길이를 입력하면 방의 넓이를 계산해주는 프로그램만들기
// var width = Number(prompt('가로 길이 입력:'));
// var heigth = Number(prompt('세로 길이 입력:'));
// // console.log('방의 넓이:', (width * heigth));

// //템플릿 문자열(``)*****
// console.log(`방의 넓이: ${width * heigth}`);

//Q. 신체질량지수 (BMI) 구하기 사용자가 몸무게, 신장을 입력하면 계산해주는 프로그램
//BMI= 몸무게(kg)/ 신장(M)의 제곱
// var weight = Number(prompt('몸무게(kg) 입력:'));
// var height = Number(prompt('신장(M) 입력:'));
// var bmi = parseInt(weight/ (height ** 2));
// console.log(`BMI: ${bmi}`);

// //나눗셈 할 때 주의사항
// // 숫자 0의 어떤 수로 나누어도 결과는 항상 0이다
// console.log(0 / 10000000); //0
// //숫자를 0으로 나눌 수 없다.
// console.log(100000000 / 0); //error

// //Q. 홀짝 게임
//컴퓨터가 홀짝 진행하고 우리가 맞춘ㄷ
// var random = Math.random();
// console.log(random);
// random= parseInt(random * 10);
// console.log(random);

// var userInputNumber = Number(prompt('홀짝 맞추세요. 1.홀  2.짝'));
// console.log(`userInputNumber: ${userInputNumber}`);
// console.log(`random: ${random}`);

//Q. 빵을 나누어 줄 수 있는 학생 수 구하기
// 길동이는 97개의 빵을 3개씩 같은 반 친구들에게 나누어 주려고 합니다
// 최대 몇명 에게 나누어 줄 수 있는지 구하고 , 남은 빵의 갯수도 구하자

var bread = 97;
var cnt = 3;
var maxStudentCut = bread / cnt;
var restRread = bread % cnt;
console.log(`maxStudentCut: ${parseInt(maxStudentCut)}`);
console.log(`restRread: ${restRread}`);


//Q. 전연병 예상 감염자 수 구하기
// 보건 당국은 전염병의 감염 확산 추세를  파악한 결과,
// 하루에 한 사람이 한 명씩 감염시키는 것으로 나타났습니다
//확진자 한 사람이 나올 경우 30일 이후에 몇 명의 감염자가 나오는지 계산해봅시다

var man = 2;
var date = 30;
var total = man ** date;
console.log(`total: ${total}`);


//대입(할당) 연산자, 복합 대입 연산자
var num5 = 10;
console.log(`num5: ${num5}`);

// num5 = num5 + 5; ->
 num5 += 5;
 console.log(`num5: ${num5}`);

 num5 *= 5;
 console.log(`num5: ${num5}`);

 num5 %= 5;
 console.log(`num5: ${num5}`);