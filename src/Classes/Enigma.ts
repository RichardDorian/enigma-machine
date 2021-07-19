import * as Logger from '../logger';
import { Letter } from '../types';
import { Plugboard } from './Plugboard';
import { Reflector } from './Reflector';
import { Rotor } from './Rotor';

export class Enigma {
  public name: string;

  private rotors: Rotor[];
  private reflector: Reflector;
  private plugboard: Plugboard;

  public constructor(name: string, rotors: Rotor[], reflector: Reflector, plugboard: Plugboard) {
    this.name = name;
    this.rotors = rotors;
    this.reflector = reflector;
    this.plugboard = plugboard;
  }

  public getRotor(index: number): Rotor {
    return this.rotors[index];
  }

  public calculateLetter(letter: Letter): Letter {
    let currentLetter: Letter = letter;
    currentLetter = this.plugboard.goThrough(currentLetter);
    currentLetter = this.rotors[0].connectionMap[currentLetter];
    currentLetter = this.rotors[1].connectionMap[currentLetter];
    currentLetter = this.rotors[2].connectionMap[currentLetter];
    currentLetter = this.reflector.reflect(currentLetter);
    currentLetter = this.rotors[2].invertedRotorConnectionMap[currentLetter];
    currentLetter = this.rotors[1].invertedRotorConnectionMap[currentLetter];
    currentLetter = this.rotors[0].invertedRotorConnectionMap[currentLetter];
    currentLetter = this.plugboard.goThrough(currentLetter);
    const rotor1rotation = this.rotors[0].rotate();
    if (rotor1rotation) {
      const rotor2rotation = this.rotors[1].rotate();
      if (rotor2rotation) {
        this.rotors[2].rotate();
      }
    }
    return currentLetter;
  }

  public calculateString(stringToCalculate: string): string {
    Logger.calculateLog(`Calculating message "${stringToCalculate}"...`);
    let output: string = '';
    for (let index = 0; index < stringToCalculate.length; index++) {
      const currentLetter: Letter = stringToCalculate[index] as Letter;
      output = output + this.calculateLetter(currentLetter);
    }
    Logger.calculateLog(`Calculated! Output of "${stringToCalculate}" : "${output}"`);
    return output;
  }
}
