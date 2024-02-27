

// Первая задача
function checkStringLenght (string = '', maxLenght = 1) {
  return string.length <= maxLenght; //  return (string.length <= maxLenght) ? true : false;
}

/*
checkStringLenght (10, 40)
1. Строка для проверки: 'Hellomynameisaskarimfromrussia'
2. 30 <= 40
3. true
*/

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

/* isPalindrom(АсКар );
  0123456
1. Аскар
2. аскар
3. р (6-1)
4. а (5-1)
5. к (4-1)
6. -//-
7. inverseLine = ракса
8. аскар === ракса
9. false
*/


