
function firstNonRepeatedChar(string) {
        let index = -1;
        let fnc = " ";

        if (string.length == 0) {
        return "EMPTY STRING"
        }

        for (let i of string) {
          if (string.split(i).length - 1 === 1) {
            fnc = i;
            break;
          } else {
            index += 1;
          }
        }
        if (index === string.length - 1) {
          return Null;
        } else {
          return fnc;
        }
      }
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
     