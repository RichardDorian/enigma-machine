import { Letter, ConnectionMap } from '../types';
import { numberToLetter } from './letter';

export function generateConnectionMap(): ConnectionMap {
  const usedLetters: number[] = [];
  const connectionMap: ConnectionMap = {
    a: 'a',
    b: 'a',
    c: 'a',
    d: 'a',
    e: 'a',
    f: 'a',
    g: 'a',
    h: 'a',
    i: 'a',
    j: 'a',
    k: 'a',
    l: 'a',
    m: 'a',
    n: 'a',
    o: 'a',
    p: 'a',
    q: 'a',
    r: 'a',
    s: 'a',
    t: 'a',
    u: 'a',
    v: 'a',
    w: 'a',
    x: 'a',
    y: 'a',
    z: 'a',
  };
  for (let index = 0; index < 13; index++) {
    generatePair(connectionMap, usedLetters);
  }
  return connectionMap;
}

function generatePair(connectionMap: ConnectionMap, usedList: number[]): void {
  const firstLetter: Letter = generateUsedNumber(usedList);
  const secondLetter: Letter = generateUsedNumber(usedList);
  connectionMap[firstLetter] = secondLetter;
  connectionMap[secondLetter] = firstLetter;
}

function generateUsedNumber(usedList: number[], ignoreList: boolean = false): Letter {
  const generated: number = generateNumber(26);
  if (ignoreList) {
    return numberToLetter(generated);
  } else {
    if (usedList.includes(generated)) {
      return generateUsedNumber(usedList, ignoreList);
    } else {
      usedList.push(generated);
      return numberToLetter(generated);
    }
  }
}

function generateNumber(maximum: number): number {
  return Math.floor(Math.random() * maximum + 1);
}
