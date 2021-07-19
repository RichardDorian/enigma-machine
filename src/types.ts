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
  connectionMap: RotorConnectionMap;
}

export interface RotorConnectionMap {
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

export interface ReflectorConnectionMap {
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

export interface PlugboardConnectionMap {
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
