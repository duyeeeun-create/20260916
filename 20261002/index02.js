// 매개변수 
// function printhello(name, age, add){     //name = '길동';
//     console.log(`${name}님 안녕 ${age}살 주소:${add}`);


// }
// printhello('길동', 20, '대전');

// 매개변수  - 가변인자 가변인자 외의 매개변수를 받으려면 무조건 앞에 가변인자는 맨 뒤에만!!
/*  학교에서 선생님의 요구: 우리반 총 학생 3명의 시험점수 총합과 평균을 구하는 프로그램 개발해*/
// ...student--> 가변인자
// function printTotalAndAverageScore(classname, ...student){
//     console.log(`학급번호 : ${classname}`);
//     console.log(`student : ${student.length}`);  //4 


//     for(var i = 0; i < student.length; i++ ){
//             console.log(student[i]);
//             totalScole += student[i]
//                 } //4 

//      var averageScore = totalScole / student.length;
//    // var totalScore = student1 +student2 +student3;
//     // var averageScore = totalScore / 3;

//     console.log(`총점 : ${totalScore}`);
//     console.log(`평점 : ${averageScore}`);
// }
// printTotalAndAverageScore('3-3반', 80, 90, 100);

/* 
요구사항 정의서 
1. 선생님은 해당 학급 학생 시험 점수를 입력한다
2. 선생님은 해당 학급의 이름을 입력한다
3. 입력된 모든 학생의 시험점수 총점과 평점 그리고 학급 이름도 출력한다

학급이름 : 3-3반
학생수 : 3명
총점 : 270점
평점: 90점
*/
//학교에서 선생님의 요구: 우리반  총학생 3명의 시험점수 총합과 평균을 구하는 프로그램을 개발해주세요

// var className; //학급이름(3-3)
// var scores = []; //학생 시험 점수들([80, 90, 100])


function printTotalAndAge(clsName, scs){
    var className = clsName;
    var scores = scs;

    console.log(`학급 이름 : ${className}`);
    console.log(`학생수 : ${scores.length}`);

    var totalScore = 0;
    for (var i = 0; i < scores.length;  i++){
        totalScore += scores[i];
    }
    console.log(`총점  : ${totalScore}`);
    console.log(`평점  : ${totalScore / scores.length}`);

    

}

function setData() {
         className = prompt('학급 이름 입력 하세요');
         var flag =true;
         while(flag){
         var selectMenu = Number(prompt('1. 점수입력     2. 출력&종료'));
        switch(selectMenu){
          case 1:      // 학생점수 입력 시도
            var score = Number(prompt('학생 점수 입력하세요'));
            scores.push(score)
            break;

          case 2: //출력하고 종료
            flag = false;
            printTotalAndAge(className, scores);
            break;
        }
         }
} 


setData();
printTotalAndAge();