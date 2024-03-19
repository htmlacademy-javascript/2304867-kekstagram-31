/* Задачи 2-го модуля:

// Первая задача
function checkStringLenght (string = '', maxLenght = 1) {
  return string.length <= maxLenght; //  return (string.length <= maxLenght) ? true : false;
}
function verifyStringLenght (string, maxLenght) {
  if (string.length <= maxLenght) {
    return true;
  } else {
    return false;
  }
}
// Вторая задача
function isPalindrom (string = '') {
  string = string.replaceAll ('', '');
  string = string.toLowerCase ();

  let inverseLine = '';

  for (let i = string.length - 1; i >= 0; i --) {
    inverseLine += string[i]; // inverseline = inverseline + string[i]
  }

  return string === inverseLine; // return string === inverseLine ? true : false
}
*/

// Выполнение задачи 5.2 модуля
/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
имяФункции('08:00', '17:30', '14:00', 90); // true
имяФункции('8:0', '10:0', '8:0', 120);     // true
имяФункции('08:00', '14:30', '14:00', 90); // false
имяФункции('14:00', '17:30', '08:0', 90);  // false
имяФункции('8:00', '17:30', '08:00', 900); // false
*/

const HOUR_TIME = {
  MINUTE: 60, // 1 * 60
};


//Функция - возможно ли уместить совещание в рабочее время

function isMeetingFitInWorkTime(workStartDt, workEndDt, meetingStartDt, meetingDuration) {
  const startWorkTime = convertStringToMinutes(workStartDt);
  const endWorkTime = convertStringToMinutes(workEndDt);
  const startMeetingTime = convertStringToMinutes(meetingStartDt);
  const endMeetingTime = startMeetingTime + meetingDuration;

  return (startWorkTime <= startMeetingTime) && (endWorkTime >= endMeetingTime);
};

//Функция получения количества минут в переданной строке в виде времени "clock"

function convertStringToMinutes(clockString) {
  const doubleDotIndex = clockString.indexOf(":");
  const hoursString = clockString.slice(0, doubleDotIndex);
  const minutesString = clockString.slice(doubleDotIndex + 1);

  return parseInt(hoursString) * HOUR_TIME.MINUTE + parseInt(minutesString);
}

console.log(isMeetingFitInWorkTime('08:00', '17:30', '14:00', 90));
console.log(isMeetingFitInWorkTime('8:0', '10:0', '8:0', 120));
console.log(isMeetingFitInWorkTime('08:00', '14:30', '14:00', 90));
console.log(isMeetingFitInWorkTime('14:00', '17:30', '08:0', 90));
console.log(isMeetingFitInWorkTime('8:00', '17:30', '08:00', 900));
console.log(isMeetingFitInWorkTime('8:00', '17:30', '19:00', 900));
