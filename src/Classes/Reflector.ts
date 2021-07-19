import { Letter, ReflectorConnectionMap } from '../types';

export class Reflector {
  public name: string;

  private connectionMap: ReflectorConnectionMap;

  public constructor(name: string, connectionMap: ReflectorConnectionMap) {
    this.name = name;
    this.connectionMap = connectionMap;
  }

  public reflect(letter: Letter): Letter {
    return this.connectionMap[letter];
  }
}
