import { Letter, RotorConfiguration } from '../types';
import { letterToNumber, numberToLetter } from './letter';

export function generateRotorConfiguration(): RotorConfiguration {
  const usedList: number[] = [];
  return {
    rotation: letterToNumber(generateUsedNumber(usedList, true)),
    connectionMap: {
      a: generateUsedNumber(usedList),
      b: generateUsedNumber(usedList),
      c: generateUsedNumber(usedList),
      d: generateUsedNumber(usedList),
      e: generateUsedNumber(usedList),
      f: generateUsedNumber(usedList),
      g: generateUsedNumber(usedList),
      h: generateUsedNumber(usedList),
      i: generateUsedNumber(usedList),
      j: generateUsedNumber(usedList),
      k: generateUsedNumber(usedList),
      l: generateUsedNumber(usedList),
      m: generateUsedNumber(usedList),
      n: generateUsedNumber(usedList),
      o: generateUsedNumber(usedList),
      p: generateUsedNumber(usedList),
      q: generateUsedNumber(usedList),
      r: generateUsedNumber(usedList),
      s: generateUsedNumber(usedList),
      t: generateUsedNumber(usedList),
      u: generateUsedNumber(usedList),
      v: generateUsedNumber(usedList),
      w: generateUsedNumber(usedList),
      x: generateUsedNumber(usedList),
      y: generateUsedNumber(usedList),
      z: generateUsedNumber(usedList),
    },
  };
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
