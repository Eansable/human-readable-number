module.exports = function toReadable (number) {
    if (number === 0) { return 'zero'};
    let result = '';
    let str = number.toString().split('').reverse();
    switch (Number(str[2])) {
      case undefined: break;
        case 1: result += 'one hundred';
        break;
         case 2: result += 'two hundred';
        break;
      case 3: result += 'three hundred';
        break;
         case 4: result += 'four hundred';
        break;
         case 5: result += 'five hundred';
        break;
         case 6: result += 'six hundred';
        break;
         case 7: result += 'seven hundred';
        break;
         case 8: result += 'eight hundred';
        break;
         case 9: result += 'nine hundred';
        break;
    }
    if (Number(str[1]) !== 0 && result !== '') {result += ' '};
    switch (Number(str[1])) {
      case undefined: break;
      case 0: break;
        case 1:     switch (number % 100) {
       case 10: result += 'ten';
       return result;
         case 11: result += 'eleven';
         return result;
      case 12: result += 'twelve';
      return result;
         case 13: result += 'thirteen';
         return result;
         case 14: result += 'fourteen';
         return result;
         case 15: result += 'fifteen';
         return result;
         case 16: result += 'sixteen';
         return result;
         case 17: result += 'seventeen';
         return result;
         case 18: result += 'eighteen';
         return result;
          case 19: result += 'nineteen';
          return result; }
        break;
         case 2: result += 'twenty';
        break;
      case 3: result += 'thirty';
        break;
         case 4: result += 'forty'  ;
        break;
         case 5: result += 'fifty';
        break;
         case 6: result += 'sixty';
        break;
         case 7: result += 'seventy';
        break;
         case 8: result += 'eighty';
        break;
         case 9: result += 'ninety';
        break;
    }
    if (Number(str[0]) !== 0 && result !== '') {result += ' '};
    switch (Number(str[0])) {
       case 1: result += 'one';
        break;
         case 2: result += 'two';
        break;
      case 3: result += 'three';
        break;
         case 4: result += 'four';
        break;
         case 5: result += 'five';
        break;
         case 6: result += 'six';
        break;
         case 7: result += 'seven';
        break;
         case 8: result += 'eight';
        break;
         case 9: result += 'nine';
        break;
           }

           return result;
}
