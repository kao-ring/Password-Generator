# Password-Generator

This generator asks user to type or choose to make a password.

- How many characters do you want in your password?
- Do you need numbers?
- Symbols?
- lower case letters?
- Capital letters?

## Added function

```
function generatePassword(){ ...

}
```

Inside of this function, there is a prompt to get password length. Then there are 4 question for asking kand of characters.

Then I made an array for putting all characters that user choiceon line 38.

```
 var allOptions = [];
```

If statements after this line are putting all characters into the array depends on user's choice.

```
if (numbersChoice) {
    allOptions = allOptions.concat(numbers);
  }
```

On line 55, I made an array for keep each character that program chose randomly. Then for loop on line 56 running (user choice) times to take random characters and putting into the array on line 55.

```
var charBox = [];
  for (i = 0; i < passwordLength; i++) {
    charBox = charBox.concat(
      allOptions[Math.floor(Math.random() * allOptions.length)]
    );
  }
```

On the last, it returns inside of charBox array but joined like strings.

```
return charBox.join("");
```
