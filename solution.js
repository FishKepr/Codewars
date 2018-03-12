'use strict'

//This function accepts two arrays, one with the 'correct' answers,
//and the second with the answers from the student.
//A correct (matching) answer awards 4 points.
//An incorrect answer is -1
//A blank answer awards no points.
//If score < 0, return 0.
function checkExam(correct, answers) {
    var score = 0;
    for (var i=0;i<correct.length;i++) {
        if (correct[i]===answers[i]) {
            score += 4;
        }
        if (correct[i]!=answers[i] && answers[i]!=''){
            score -= 1;
        }
    }
    if (score > 0) {
        return score;
    } else {
        return 0;
    }
}
console.log('Check1:  '+ checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) //→ 6
console.log('Check2:  '+ checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])) //→ 7
console.log('Check3:  '+ checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])) //→ 16
console.log('Check4:  '+ checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])) //→ 0