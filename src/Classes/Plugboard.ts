import { Letter, ConnectionMap } from '../types';

export class Plugboard {
  private connectionMap: ConnectionMap;

  public constructor(plugboardConfiguration: ConnectionMap) {
    this.connectionMap = plugboardConfiguration;
  }

  public plug(firstLetter: Letter, secondLetter: Letter): void {
    this.connectionMap[firstLetter] = secondLetter;
    this.connectionMap[secondLetter] = firstLetter;
  }

  public goThrough(letter: Letter): Letter {
    return this.connectionMap[letter];
  }
}
