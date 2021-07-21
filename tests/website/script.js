function generateRandomConfig() {
  const generatedConfiguration = EnigmaMachine.generateEnigmaConfiguration();
  document.getElementById('enigma-config').value = JSON.stringify(generatedConfiguration, null, 2);
}

let enigma = 0;
let enigmaConf;

function reset() {
  if (enigmaConf) {
    if (confirm('Reset Enigma to last used configuration?')) {
      applyChanges();
    }
  } else {
    alert("Can't reset if Enigma is not setup!");
  }
}

function applyChanges() {
  const config = document.getElementById('enigma-config').value;
  if (config == '') {
    alert('You must apply a valid configuration of Enigma');
  } else {
    enigmaConf = config;
    enigma = EnigmaMachine.Enigma.generateFromEnigmaConfig(JSON.parse(config));
    setRotorDisplayValue(0, enigma.getRotor(0).rotation);
    setRotorDisplayValue(1, enigma.getRotor(1).rotation);
    setRotorDisplayValue(2, enigma.getRotor(2).rotation);
  }
}

function calculate() {
  if (!enigma == 0) {
    const toCalculate = document.getElementById('to-encrypt').value;
    document.getElementById('encrypted').value = enigma.calculateString(toCalculate);
    setRotorDisplayValue(0, enigma.getRotor(0).rotation);
    setRotorDisplayValue(1, enigma.getRotor(1).rotation);
    setRotorDisplayValue(2, enigma.getRotor(2).rotation);
  } else {
    alert('Enigma is not setup yet!');
  }
}

function setRotorDisplayValue(rotor, value) {
  let id = 'rotor' + rotor;
  document.getElementById(id).innerHTML = value;
}
