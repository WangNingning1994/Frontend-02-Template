const isHex = (str) => {
  return str.indexOf('0x') != -1;
}
const isOctal = (str) => {
  return str.indexOf('0o') != -1;
}
const isBinary = (str) => {
  return str.indexOf('0b') != -1;
}
const base = {
  hex: 16,
  octal: 8,
  binary: 2,
  ten: 10
};
const calcNum = (base, str) => {
  // split str and reverse to make calucation easier
  const strArr = str.split('').reverse();
  let numVal = 0;
  for (let i = 0; i < strArr.length; i++) {
    numVal+= strArr[i] * Math.pow(base, i);
  }
  return numVal;
}
const calcNumWithDecimalPoint = (base, str) =>  {
  let strArr = str.split('.');
  let numVal = 0;
  // for decimal like '.123' or '123.'
  if (strArr[0] === '') {
    strArr = str.split('');
    for (let i = 1; i < strArr.length; i++) {
      numVal += strArr[i] *  Math.pow(base, i * -1);
    }
  } else if (strArr[1] === '') {
    strArr = strArr[0].split('').reverse(); // e.g. ['123'].reverse
    for (let i = 0; i < strArr.length; i++) {
      numVal+= strArr[i] * Math.pow(base, i);
    }
  } else {
    // for normal decimal like 123.123
    const leftArr = strArr[0].split('').reverse();
    const rightArr = `.${strArr[1]}`.split('');
    for (let i = 0; i < leftArr.length; i++) {
      numVal+= leftArr[i] * Math.pow(base, i);
    }
    for (let i = 1; i < rightArr.length; i++) {
      numVal += rightArr[i] *  Math.pow(base, i * -1);
    }
  }
  return numVal;
};
const stringToNumber = (str) => {
  str = str.trim();
  let strArr;
  if (str === '') {
    return 0;
  }
  // if str's foramt is like '0x11' or '0o11' or '0b11'
  if (str.substring(0, 2) === '0x') {
    return calcNum(16, str.substring(2));
  } else if (str.substring(0, 2) === '0o') {
    return calcNum(8, str.substring(2));
  } else if(str.substring(0, 2) === '0b') {
    return calcNum(2, str.substring(2));
  } else if(str.indexOf('e') !== -1) {
    // for scientific notation
    const num = stringToNumber(str.split('e')[0]);
    const e = stringToNumber(str.split('e')[1]);
    return num * Math.pow(10, e);
  } else if(str.indexOf('.') === -1) {
    // for integer and decimal
    return calcNum(10, str);
  } else {
    return calcNumWithDecimalPoint(10, str);
  }
}


function numberToString(num, base) {
  // comvert num to base 10 represtation
  num = Number(num);
  let prefix = '';
  let remainderArr = [];
  if (base === 10) {
    return num + '';
  } else if (base === 2) {
    prefix = '0b';
    while(num !== 0) {
      remainderArr.push(num % base);
      num = Math.floor(num / base);
    }
  } else if (base === 8) {
    prefix = '0o';
    while(num !== 0) {
      remainderArr.push(num % base);
      num = Math.floor(num / base);
    }
  } else if (base === 16) {
    prefix = '0x';
    while(num !== 0) {
      remainderArr.push(num % base);
      num = Math.floor(num / base);
    }
  }
  return prefix + remainderArr.reverse().join('');
}