// 반복문(for문 , while문)
// for문 : 횟수에 의한 반복 실행
// while문: 조건에 의한 반복 실행

/* for(초기화; 조건식; 단계){
          반복실행문       
}
*/

// for(var i = 1; i < 11; i++){
//     console.log('hello' , i);
// }

// // 1부터 10까지의 정수의 합
// // var sum = 0;
// // for(var i = 1; i <= 10; i++){
// //     sum += i;
// // }
// // console.log(`sum: ${sum}` );

// //Q. 1부터 10까지의 정수의 합을 구하되, 홀수의 합만 구하자
// var sum = 0;
// for(var i = 1; i < 11; i += 2){
//     sum += i;
// }
// console.log(`sum: ${sum}` );

//Q 사용자가 원하는 구구단을 입력하면 해당 구구단이 추력된다

// var inputnumber = Number(prompt('구구단을 입력하시오: '));

// for(var i = 1; i < 10; i++){
//    console.log(`${inputnumber}* ${i}= ${inputnumber* i}`);
// }

//Q. 1단 부터 9단까지 전체 구구단을 출력하는 프로그램

// for(var n = 1; n < 10; n++ ){
// for(var i = 1; i < 10; i++){
//   console.log(`${n}* ${i}= ${n* i}`)}};

// for(var i = 1; i < 10; i++){
//     var result = '';
//     for(var j = 2; j < 10; j++){
//     //    result += j +' * ' + i + ' = ' + ( j * i);
//       result += `${j} * ${i} = ${j*i} \t`;
//     } 
//     console.log(result);
// }

// console.log('he\'llo')

// for문 연습

// 짝수만 출력
// for (var i =1; i < 10; i++) { if (i % 2 == 0) { console.log(i); } }

//3단만 출력
// for(var n=3; n<4; n++){ for(var i=1; i<10; i++){
// console.log(`${n} * ${i} = ${i*n}`);}}

//구구단 출력
// for(var n=2; n<10; n++){ for(var i=1; i<10; i++){
// console.log(`${n} * ${i} = ${i*n}`);}}

//짝수단만 출력
// for(var n=2; n<10; n++){for(var i=1; i<10; i++) if (n % 2 == 0) {
// console.log(`${n} * ${i} = ${i*n}`);}}

//3의 배수만 출력
// for (var i = 1; i < 21; i++){

//     if ( i %3== 0  ) {
//         console.log( i );
//     }}

// console.log('i');  // 문자 i
// console.log(i);    // 변수 i의 값

//for ... in 문 키 값 조회
var myInfo = {
      myName : 'gildong', myAge : 20, myAddr :'대전', myPhone : '010-1234-5678'
}

for( var info in myInfo){
        console.log(`info: ${info}`);
        console.log(`${myInfo[info]}`) //myInfo[myaddr]
}

//while 문 조건에 의한 반복
//while(조건식){
// 반복실행문 
//}
var i = 1;
while(i < 11){
  console.log(`i: ${i}`); i++;
}
 console.log(`i out: ${i}`); //11

 // do{ } while(조건식) 문 : 최초1회는 함
 var j = 1;
 do {
  console.log(`j: ${j}`);
  j++;
 } while( j> 100);