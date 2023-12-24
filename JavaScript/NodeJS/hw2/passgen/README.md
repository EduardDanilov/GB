# Random Password Generator

## Easy-to-use random password generator

### Install

```javascript
    $ npm install simple-pass-generator
```

### How to use
__Note:__ the first parameter means the number of characters in the password. 
The second, third and fourth parameters define what the password will consist of. 
They should be defined as: numbers, letters, symbols.

__For example:__

```javascript
    const simplePassGenerator = require('simple-pass-generator')

    const result = simplePassGenerator.getRandomPass(5, 'letters')
    //the password will consist of 5 upper and lower case letters (dZdQc)

    const result = simplePassGenerator.getRandomPass(5, 'letters', 'numbers')
    //the password will consist of 5 upper and lower case letters and numbers (u87V9)

    const result = simplePassGenerator.getRandomPass(5, 'letters', 'symbols', 'numbers')
    //the password will consist of 5 upper and lower case letters, symbols and numbers (!EcA4)
```