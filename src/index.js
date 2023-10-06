const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  let morseCode = [];
  let result = ``;
  for (let i = 0; i < expr.length / 10; i++) {
    let morzeChar = ``;
    arr[i] = expr.slice(i * 10, (i + 1) * 10);
    for (let k = 0; k < 10; k = k + 2) {
      // console.log(`Здесь на ${k} позиции: ${arr[i].slice(k, k + 2)}`);
      if (arr[i].slice(k, k + 2).indexOf("00") >= 0) {
        // console.log("В данной подстроке два нуля");
      } else if (arr[i].slice(k, k + 2).indexOf("10") >= 0) {
        // console.log("Не два нуля, а 10");
        morzeChar = morzeChar + `.`;
      } else if (arr[i].slice(k, k + 2).indexOf("11") >= 0) {
        // console.log("Не два нуля, а 11");
        morzeChar = morzeChar + `-`;
      } else if (arr[i].slice(k, k + 2).indexOf("**") >= 0) {
        // console.log("Не два нуля, а **");
        morzeChar = morzeChar + ` `;
        k = 10;
      }
      morseCode[i] = morzeChar;
    }
  }

  for (let i = 0; i < morseCode.length; i++) {
    if (morseCode[i].indexOf(" ") >= 0) {
      result = result + " ";
    } else result = result + MORSE_TABLE[morseCode[i]];
  }
  return result;
}

module.exports = {
  decode,
};
