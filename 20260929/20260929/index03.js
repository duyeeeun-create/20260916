//Q 사용자가 입력한 숫자가 10보다 큰지 아닌지 출력

// var number = Number(prompt('숫자를 입력하시오'));

// if ( number > 10){
//     console.log('10보다 크다');
// } else { console.log('10보다 작다');
// }

//속도위반 경고하기
// 제한속도가 50km/h인 도로에서 속도위반하는 자동차에게 경고 하는 프로그램을 만들어봅시다
//  자동차 속도 입력받기 자동차 속도가 50초과 경고


// var number = Number(prompt('숫자를 입력하시오'));

// if ( number > 50){
//    alert('경고');
// } else { alert('괜찮다');
// }
// console.log(`number: ${number}`);


//사용자가 입력한 점수가 80점 이상이면 합격입니다 출력
//80미만이면 아쉽습니다 다시 도전해주세요 출력


// var studentNumber = Number(prompt('점수를 입력하시오'));
// if ( studentNumber >= 80){
//     console.log('합격입니다');
// } else if(studentNumber < 80) { console.log('아쉽습니다, 다시 도전해주세요');
// }

//자동주문 시스템 만들기
//1번을 누르면 한국어로, 2번은 영어, 3번은 중국어 그 외 번호는 영어로 주문 받는 프로그램

//1번: 주문하시겠어요?
//2번 : Would you like to order?
//3번 : 您要点菜吗？

// var person = Number(prompt('1.한국   2. English  3.中国 '));

// switch(person) {
//     case 1:
//         console.log('주문하시겠어요');
//         break;
//     case 2:
//         console.log(' Would you like to order?');
//         break;
//     case 3:
//         console.log('您要点菜吗？');
//         break; 
//      default: 
//         console.log(' Would you like to order?');
//         break;
//     }

//국가 재난 지원금 
// 가구 인원수에 따른 국가 지원금 수령액 안내 
//1인가구 : 400,000 2인 600,000 3인 800,000 4인이상 1,000,000

// var family = Number(prompt('가구 인원 수를 입력하시오 '));

// if (family === 1){
//  console.log('400,000 원');
// } else if (family === 2){
//   console.log('600,000원');
// } else if (family === 3 ){
//     console.log('800,000원 ');
// } else if (family >= 4){
//   console.log(' 1,000,000원');
// }


//BMI지수 & 비만 상태
//BMI = 몸무게 / 키의 제곱  18.5 미만 저체중 /18.5~22.9 정상 /23~29.9 비만1단계
// 30.0 ~ 34.9 비만 2단계  /35.0 ~ 비만3단계

// var height = Number(prompt('키를 입력하시오 '));
// var weight = Number(prompt('몸무게를 입력하시오 '));
// var BMI =weight/ (height ** 2);

// if (BMI < 18.5){
//  console.log('저체중');
// } else if (BMI>=18.5 && BMI<22.9){
//   console.log('정상');
// } else if (BMI>23 && BMI<29.9 ){
//     console.log('비만1단계 ');
// } else if (BMI>30.0 && BMI<34.9){
//   console.log(' 비만2단계');
// }else if (BMI>35.0){
//   console.log(' 비만3단계');
// }


// // 정수 판별하기 사용자가 입력한 정수에 대해 음수 양수 0을 판단하고 
// // //출력후 양수라면 홀수인지 짝수인지

// var count = Number(prompt('정수를 입력하시오'));
// if (count>0){
//  console.log('양수입니다');

//  if(count % 2 === 0 ) {
//     console.log('짝수');
//  } else{
//     console.log('홀수');
//  }
// } else if (count === 0){
//   console.log('0입니다');
// } else if (count < 0 ){
//     console.log('음수입니다 ');
// }

// 버스 전용차로 단속 프로그램 
// 버스 전용차로에 버스가 아닌 승용차 주행할 경우 단속
// 단 토요일 및 공휴일는 단속 안함
// 요일 입력받자
// 평일이라면 차종( 버스, 승용차 ) 입력
//차종이 승용차라면 단속 그렇지 않으면 통과 
// var day = Number (prompt('무슨 요일인지 숫자로 입력하세요'));
// if( day > 5){

// }
 var endBirthyear = Number(prompt('출생연도 끝자리 입력'));
 var age = Number(prompt('나이 입력'));

 if (age < 65) {  
 if (endBirthyear === 1 || endBirthyear === 6 ){
    console.log('월요일 구매 가능');
 } else if (endBirthyear === 2 || endBirthyear === 7 ){
    console.log('화요일 구매 가능');
 }else if (endBirthyear === 3 || endBirthyear === 8 ){
    console.log('수요일 구매 가능');
 }else if (endBirthyear === 4 || endBirthyear === 9 ){
    console.log('목요일 구매 가능');
 }else if (endBirthyear === 5 || endBirthyear === 0 ){
    console.log('금요일 구매 가능');
 }
 
 }else {
    alert('언제든지 구매 가능합니다')
 }
