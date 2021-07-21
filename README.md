# enigma-machine
Enigma simulator in Typescript

## Installation and Importation
### Installation
```bash
$ npm install enigma-machine
```
### Importation
```js
// CommunJS
const EnigmaMachine = require('enigma-machine');

// Browser
<script src="https://unpkg.com/enigma-machine@1.1.0/build/browser.js"></script>
```

## Machine creation
### Creating a Rotor
```js
const rotor1 = new EnigmaMachine.Rotor(/* RotorConfiguration Object */);
```
### Creating a Reflector
```js
const reflector = new EnigmaMachine.Reflector(/* ConnectionMap Object */);
```
### Creating a Plugboard
```js
const plugboard = new EnigmaMachine.Plugboard(/* ConnectionMap Object */);
```
❓ [See how to generate a random ConnectionMap](https://github.com/RichardDorian/enigma-machine#generating-a-connectionmap-used-to-configure-a-reflector-or-a-plugboard)
### Creating the Enigma Machine
```js
const enigma = new EnigmaMachine.Enigma([rotor1, rotor2, rotor3], reflector, plugboard);
```
### Creating an Enigma Machine from an EnigmaConfiguration
```js
const enigma = new EnigmaMachine.Enigma.generateFromEnigmaConfig(/* EnigmaConfiguration Object */);
```
:warning: **Rotor list must contain 3 rotors**

## Message
### Calculate a message with Enigma
```js
const myMessage = enigma.calculateString('helloworld');
// Return 'lumquxgpzf' with a config that I lost :D

const mySecondMessage = enigma.calculateString('lumquxgpzf');
// Return 'helloworld' with the same config
```
See [test file](https://github.com/RichardDorian/enigma-machine/blob/master/tests/index.test.js) on GitHub

## Generating configurations and ConnectionMaps
### Generating a Rotor configuration
```js
const rotorConfiguration = EnigmaMachine.generateRotorConfiguration();
```
:warning: **If you are creating manually the `RotorConfiguration` you can't use the `generateConnectionMap` method !**
### Generating a ConnectionMap (used to configure a Reflector or a Plugboard)
```js
// For a Reflector
const reflectorConnectionMap = EnigmaMachine.generateConnectionMap();
// const reflector = new EnigmaMachine.Reflector(reflectorConnectionMap);

// For a Plugboard
const plugboardConnectionMap = EnigmaMachine.generateConnectionMap();
// const plugboard = new EnigmaMachine.Plugboard(plugboardConnectionMap);
```
### Generating an EnigmaConfiguration
```js
const enigmaConfig = EnigmaMachine.generateEnigmaConfiguration();
```
:warning: **If you want to create two Enigma machines with the same configuration (for crypting and "decrypting" for example) you can't use the same object ! You have to create an another object with the same content. Why you would ask... the answer is very simple because Javascript is a piece of 💩** ***(btw I lost 4 hours because of this*** 😡 ***)***

## Todo
- Improve the browser version of the lib (because I'm bundling it manually) 🖥️
- ~~Nothing (I hope) 😀~~