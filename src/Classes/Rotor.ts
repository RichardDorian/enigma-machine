import * as Logger from '../logger';
import { Letter, RotorConfiguration, RotorConnectionMap } from '../types';
import { letterToNumber, numberToLetter } from '../Utils/letter';

export class Rotor {
  public name: string;

  public rotation: number;
  public connectionMap: RotorConnectionMap;
  public invertedRotorConnectionMap: RotorConnectionMap;

  public constructor(name: string, rotorConfiguration: RotorConfiguration) {
    this.name = name;
    this.connectionMap = rotorConfiguration.connectionMap;
    this.invertedRotorConnectionMap = this.invertConnectionMap(this.connectionMap);
    this.rotation = rotorConfiguration.rotation;
  }

  public rotate(times: number = 1): boolean {
    this.rotation++;
    for (let index = 0; index < times; index++) {
      Object.keys(this.connectionMap).forEach(key => {
        const currentNumber: number = letterToNumber(this.connectionMap[key as Letter]);
        let newNumber: number = currentNumber + 1;
        if(newNumber > 26) newNumber += -26;
        this.connectionMap[key as Letter] = numberToLetter(newNumber);
      });
    }
    this.invertedRotorConnectionMap = this.invertConnectionMap(this.connectionMap);
    Logger.info(`Rotor ${this.name} rotated ${times} time(s)`);
    if(this.rotation > 26) {
      this.rotation += -26;
      Logger.info(`Rotor ${this.name} made a full rotation`);
      return true;
    } else return false;
  }

  private invertConnectionMap(obj: object): RotorConnectionMap {
    return Object.assign({}, ...Object.entries(obj).map(([a,b]) => ({ [b]: a }))) as RotorConnectionMap;
  }

}