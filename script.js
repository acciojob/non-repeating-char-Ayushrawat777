function firstNonRepeatedChar(string) {
        let index = -1;
        let fnc = " ";

        if (string.length == 0) {
        return null  
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
          return null;
        } else {
          return fnc;
        }
      }
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input.toLowerCase())); 