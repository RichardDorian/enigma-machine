# enigma-machine
Enigma simulator in Typescript

## Installation and Importation
### Installation
```bash
$ npm install enigma-machine
```
### Importation
```js
const EnigmaMachine = require('enigma-machine');
```

## Machine creation
### Creating a Rotor
```js
const rotor1 = new EnigmaMachine.Rotor('1', /* RotorConfiguration Object */);
```
### Creating a Reflector
```js
const reflector = new EnigmaMachine.Reflector('MyReflector', /* ReflectorConnectionMap Object */);
```
### Creating a Plugboard
```js
const plugboard = new EnigmaMachine.Plugboard('MyPlugboard', /* PlugboardConnectionMap Object */);
```
### Creating the Enigma Machine
```js
const enigma = new EnigmaMachine.Enigma('MyEnigma', [rotor1, rotor2, rotor3], reflector, plugboard);
```
:warning: **Rotor list must contain 3 rotors**

## Message
### Calculate a message with Enigma
```js
const myMessage = enigma.calculateString('helloworld');
// Return 'lumquxgpzf' with test config

const mySecondMessage = enigma.calculateString('lumquxgpzf');
// Return 'helloworld' with test config
```
See [test file](https://github.com/RichardDorian/enigma-machine/blob/master/tests/index.test.js) on GitHub

## Generating configurations
### Generating a Rotor configuration
```js
const rotorConfiguration = EnigmaMachine.generateRotorConfiguration();
```

## Todo
- Add a configuration generator for :
  - Reflector
  - Plugboard
- Add a way to import full Enigma configuration