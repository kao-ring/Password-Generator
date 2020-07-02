# Password-Generator

https://github.com/kao-ring/Password-Generator

https://kao-ring.github.io/Password-Generator/

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

Then I made an array for putting all characters that user choice.

```
 var allOptions = [];
```

If statements after this line are putting all characters into the array depends on user's choice.

```
if (numbersChoice) {
    allOptions = allOptions.concat(numbers);
  }
```

Then I made an array for keep each character that program chose randomly. Then for loop runs (user choice) times to take random characters and putting into the array charBox.

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

### Bug fix log

- Sometimes it doesn't pick up all kinds of characters that user chose, so I added one more line for each if statement.

````
harBox = charBox.concat(
      numbers[Math.floor(Math.random() * numbers.length)]
    );
    ```
    And change running times of for loop
    ```
    for (i = 0; i < passwordLength - confirmTimes; i++)
    ```
````

- If I use this generator few times in row, pasword length getting short, so I moved this line from line 22 to line 42.
