//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  return operation(array); // เรียกใช้ operation กับอาร์เรย์ที่ส่งเข้ามา
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function checkScores(scores) {
  const passedStudents = scores.filter((score) => score > 70); // กรองคะแนนที่มากกว่า 70
  return passedStudents.length >= 5; // ตรวจสอบว่ามีนักเรียนที่คะแนนมากกว่า 70 อย่างน้อย 5 คนหรือไม่
}

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkScores)
  ? "ผ่านเกณฑ์ ✅"
  : "ไม่ผ่านเกณฑ์ ❌";
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkScores)
  ? "ผ่านเกณฑ์ ✅"
  : "ไม่ผ่านเกณฑ์ ❌";
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkScores)
  ? "ผ่านเกณฑ์ ✅"
  : "ไม่ผ่านเกณฑ์ ❌";