import * as Logger from '../logger';
import { Letter, PlugboardConnectionMap } from "../types";

export class Plugboard {
  public name: string;

  private connectionMap: PlugboardConnectionMap;

  public constructor(name: string, plugboardConfiguration: PlugboardConnectionMap) {
    this.name = name;
    this.connectionMap = plugboardConfiguration;
  }

  public plug(firstLetter: Letter, secondLetter: Letter): void {
    this.connectionMap[firstLetter] = secondLetter;
    this.connectionMap[secondLetter] = firstLetter;
    Logger.info(`Plugboard ${this.name} : Letter ${firstLetter} plugged to ${secondLetter}`);
  }

  public goThrough(letter: Letter): Letter {
    return this.connectionMap[letter];
  }
}