import { Letter, ConnectionMap } from '../types';

export class Reflector {
  private connectionMap: ConnectionMap;

  public constructor(connectionMap: ConnectionMap) {
    this.connectionMap = connectionMap;
  }

  public reflect(letter: Letter): Letter {
    return this.connectionMap[letter];
  }
}
