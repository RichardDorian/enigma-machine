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
  const toCalculate = document.getElementById('to-encrypt').value;
  if(toCalculate == "") { alert('You must have at least one letter to Encrypt/Decrypt'); return; }
  if(!checkChars(toCalculate)) { alert('You can\'t use specials characters with Enigma.'); return; } 
  if(toCalculate.indexOf(' ') >= 0) { alert('You can\'t use spaces with Enigma.'); return; }
  if (!enigma == 0) {
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

function checkChars(str){
  return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}
