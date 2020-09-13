const matchA = (str) => {
  for (const char of str) {
    if (char === 'a') {
      return true;
    }
  }
  return false;
}

const matchAB = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] + str[i+1] === 'ab') {
      return true;
    }
  }
  return false;
}

const matchABCDEF = (str) => {
  let foundA = false;
  let foundB = false;
  let foundC = false;
  let foundD = false;
  let foundE = false;
  let foundF = false;
  for (let char of str) {
   if (char === 'a') {
     foundA = true;
   } else if (foundA && !foundB && char === 'b') {
     foundB = true;
   } else if (foundB && !foundC && char === 'c') {
     foundC = true;
   } else if (foundC && !foundD && char === 'd') {
     foundD = true;
   } else if (foundD && !foundE && char === 'e') {
     foundE = true;
   } else if (foundE && char === 'f') {
     return true;
   } else {
     foundA = false;
     foundB = false;
     foundC = false;
     foundD = false;
     foundE = false;
     foundF = false;
   }
  }
  return false;
}

// status machine part-1
const matchABCDEFV2 = (str) => {
  let status = start;
  for (let char of str) {
    status = status(char);
  }
  return status === end;
  function start(char) {
    if (char === 'a') {
      return foundA;
    } else {
      return start;
    }
  }
  // ending trap
  function end() {
    return end;
  }
  function foundA(char) {
    if (char === 'b') {
      return foundB;
    } else {
      return start(char)
    }
  }
  function foundB(char) {
    if (char === 'c') {
      return foundC;
    } else {
      return start(char)
    }
  }
  function foundC(char) {
    if (char === 'd') {
      return foundD;
    } else {
      return start(char)
    }
  }
  function foundD(char) {
    if (char === 'e') {
      return foundE;
    } else {
      return start(char)
    }
  }
  function foundE(char) {
    if (char === 'f') {
      return end;
    } else {
      return start(char)
    }
  }
}

// status machine part-2
const matchABCABX = (str) => {
  let status = start;
  for (let char of str) {
    status = status(char);
  }
  return status === end;
  function start(char) {
    if (char === 'a') {
      return foundA;
    } else {
      return start;
    }
  }
  // ending trap
  function end() {
    return end;
  }
  function foundA(char) {
    if (char === 'b') {
        return foundB;
    } else {
      return start(char)
    }
  }
  function foundB(char) {
    if (char === 'c') {
      return foundC;
    }
    return start(char);
  }
  function foundC(char) {
    if (char === 'a') {
      return foundA2;
    }
    return start(char);
  }
  function foundA2(char) {
    if (char === 'b') {
      return foundB2;
    }
    return start(char);
  }
  function foundB2(char) {
    if (char === 'x') {
      return end;
    }
    return start(char);
  }
}
matchABCABX('teabcabx');

const matchABABABX = (str) => {
  let status = start;
  for (let char of str) {
    status = status(char);
  }
  return status === end;
  function start(char) {
    if (char === 'a') {
      return foundA;
    } else {
      return start;
    }
  }
  // ending trap
  function end() {
    return end;
  }
  function foundA(char) {
    if (char === 'b') {
        return foundB;
    } else {
      return start(char)
    }
  }
  function foundB(char) {
    if (char === 'a') {
        return foundA2;
    } else {
      return start(char)
    }
  }
  function foundA2(char) {
    if (char === 'b') {
      return foundB2;
    }
    return start(char);
  }
  function foundB2(char) {
    if (char === 'a') {
      return foundA3;
    }
    return start(char);
  }
  function foundA3(char) {
    if (char === 'b') {
      return foundB3;
    }
    return start(char);
  }
  function foundB3(char) {
    if (char === 'x') {
      return end;
    }
    if (char === 'a') {
      return foundA2;
    }
    return start(char);
  }
}
matchABABABX('tababababx');
