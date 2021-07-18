const EnigmaMachine = require('../build/index');

const myRotor = new EnigmaMachine.Rotor('1', {
  rotation: 20,
  connectionMap: {
    a: 'c',
    b: 'z',
    c: 'n',
    d: 'o',
    e: 'w',
    f: 'k',
    g: 'l',
    h: 'q',
    i: 'f',
    j: 'x',
    k: 'v',
    l: 'a',
    m: 'h',
    n: 'g',
    o: 'y',
    p: 's',
    q: 'p',
    r: 't',
    s: 'b',
    t: 'i',
    u: 'd',
    v: 'u',
    w: 'j',
    x: 'e',
    y: 'r',
    z: 'm'
  }
});
const myRotor2 = new EnigmaMachine.Rotor('2', {
  rotation: 8,
  connectionMap: {
    a: 'u',
    b: 'h',
    c: 'b',
    d: 's',
    e: 'e',
    f: 'r',
    g: 'v',
    h: 'j',
    i: 'c',
    j: 't',
    k: 'n',
    l: 'p',
    m: 'a',
    n: 'q',
    o: 'g',
    p: 'y',
    q: 'd',
    r: 'o',
    s: 'z',
    t: 'l',
    u: 'k',
    v: 'w',
    w: 'x',
    x: 'm',
    y: 'i',
    z: 'f'
  }
});
const myRotor3 = new EnigmaMachine.Rotor('3', {
  rotation: 26,
  connectionMap: {
    a: 'g',
    b: 'p',
    c: 'd',
    d: 'l',
    e: 'e',
    f: 'k',
    g: 'a',
    h: 'm',
    i: 'f',
    j: 'c',
    k: 't',
    l: 's',
    m: 'w',
    n: 'h',
    o: 'o',
    p: 'q',
    q: 'y',
    r: 'v',
    s: 'r',
    t: 'z',
    u: 'x',
    v: 'b',
    w: 'j',
    x: 'u',
    y: 'i',
    z: 'n'
  }
});

const myReflector = new EnigmaMachine.Reflector('MyReflector', { a: 'z',  b: 'y', c: 'x', d: 'w', e: 'v', f: 'u', g: 't', h: 's', i: 'r', j: 'q', k: 'p', l: 'o', m: 'n', n: 'm', o: 'l', p: 'k', q: 'j', r: 'i', s: 'h', t: 'g', u: 'f', v: 'e', w: 'd', x: 'c', y: 'b', z: 'a' });
const myPlugboard = new EnigmaMachine.Plugboard('MyPlugboard', { a: 'b', b: 'a', c: 'd', d: 'c', e: 'f', f: 'e', g: 'h', h: 'g', i: 'j', j: 'i', k: 'l', l: 'k', m: 'n', n: 'm', o: 'p', p: 'o', q: 'r', r: 'q', s: 't', t: 's', u: 'v', v: 'u', w: 'x', x: 'w', y: 'z', z: 'y'});

const myEnigma = new EnigmaMachine.Enigma('MyEnigmaMachine', [myRotor, myRotor2, myRotor3], myReflector, myPlugboard);

myEnigma.calculateString('lumquucamstlcgvxmicutrznvodlrxmr');