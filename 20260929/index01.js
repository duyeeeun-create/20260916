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

for(var i = 1; i < 10; i++){
    var result = '';
    for(var j = 2; j < 10; j++){
    //    result += j +' * ' + i + ' = ' + ( j * i);
      result += `${j} * ${i} = ${j*i} \t`;
    } 
    console.log(result);
}

// 
