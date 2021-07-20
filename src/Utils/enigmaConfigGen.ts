import { EnigmaConfiguration } from '../types';
import { generateConnectionMap } from './connectionMapGen';
import { generateRotorConfiguration } from './rotorConfigGen';

export function generateEnigmaConfiguration(): EnigmaConfiguration {
  return {
    rotors: [generateRotorConfiguration(), generateRotorConfiguration(), generateRotorConfiguration()],
    reflector: generateConnectionMap(),
    plugboard: generateConnectionMap(),
  };
}
