import { Rotor } from './Classes/Rotor';

export type Letter =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'x'
  | 'z';

export interface RotorConfiguration {
  rotation: number;
  connectionMap: ConnectionMap;
}

export type RotorList = [Rotor, Rotor, Rotor];

export interface ConnectionMap {
  a: Letter;
  b: Letter;
  c: Letter;
  d: Letter;
  e: Letter;
  f: Letter;
  g: Letter;
  h: Letter;
  i: Letter;
  j: Letter;
  k: Letter;
  l: Letter;
  m: Letter;
  n: Letter;
  o: Letter;
  p: Letter;
  q: Letter;
  r: Letter;
  s: Letter;
  t: Letter;
  u: Letter;
  v: Letter;
  w: Letter;
  x: Letter;
  y: Letter;
  z: Letter;
}

export interface EnigmaConfiguration {
  rotors: [RotorConfiguration, RotorConfiguration, RotorConfiguration];
  reflector: ConnectionMap;
  plugboard: ConnectionMap;
}
