var grades = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2,
    "E": 1,
    "F": 0,
  }
  var option1 = document.querySelectorAll('select')[1];
  var option2 = document.querySelectorAll('select')[3];
  var option3 = document.querySelectorAll('select')[5];
  var option4 = document.querySelectorAll('select')[7];
  var option5 = document.querySelectorAll('select')[9];
  var option6 = document.querySelectorAll('select')[11];
  var calculate = document.querySelector('button');
  var display = document.querySelector('.msg')
  var subject1 = document.querySelectorAll('select')[0]
  var subject2 = document.querySelectorAll('select')[2]
  var subject3 = document.querySelectorAll('select')[4]
  var subject4 = document.querySelectorAll('select')[6]
  var subject5 = document.querySelectorAll('select')[8]
  var subject6 = document.querySelectorAll('select')[10]
  calculate.onclick = function () {
    var subjects1 = subject1.value
    var subjects2 = subject2.value
    var subjects3 = subject3.value
    var subjects4 = subject4.value
    var subjects5 = subject5.value
    var subjects6 = subject6.value
    var selectedSubj = [subjects1, subjects2, subjects3, subjects4, subjects5, subjects6]
    var repeatedSubj = selectedSubj.filter(function (item, index, arr) { 
      if (arr.lastIndexOf(item) === index) {
          return false;
      } else {
          return true;
  }
});

if (repeatedSubj.length > 0) alert('You repeated subjects');

    var grade1 = option1.value;
    var grade2 = option2.value;
    var grade3 = option3.value;
    var grade4 = option4.value;
    var grade5 = option5.value;
    var grade6 = option6.value;
    var score = grades[grade1] + grades[grade2] + grades[grade3] + grades[grade4] + grades[grade5] + grades[grade6];
    display.textContent = 'Your total score is ' + score;
    
  }
  