/*--------------------------------------
    SCRIPT CREATED BY CAIKE LAURENTINO
    CAIKELAURENTINO.COM.BR
--------------------------------------- */

class ConsonantClassification {
  constructor(symbol, place, manner, voicing) {
    this.symbol = symbol
    this.place = place
    this.manner = manner
    this.voicing = voicing
  }
}

let consonants = Array()
consonants.push(new ConsonantClassification('m', 'bilabial', 'nasal', true))
consonants.push(new ConsonantClassification('p', 'bilabial', 'plosive', false))
consonants.push(new ConsonantClassification('b', 'bilabial', 'plosive', true))
consonants.push(new ConsonantClassification('f', 'labio-dental', 'fricative', false))
consonants.push(new ConsonantClassification('v', 'labio-dental', 'fricative', true))
consonants.push(new ConsonantClassification('θ', 'dental', 'fricative', false))
consonants.push(new ConsonantClassification('ð', 'dental', 'fricative', true))
consonants.push(new ConsonantClassification('n', 'alveolar', 'nasal', true))
consonants.push(new ConsonantClassification('t', 'alveolar', 'plosive', false))
consonants.push(new ConsonantClassification('d', 'alveolar', 'plosive', true))
consonants.push(new ConsonantClassification('s', 'alveolar', 'fricative', false))
consonants.push(new ConsonantClassification('z', 'alveolar', 'fricative', true))
consonants.push(new ConsonantClassification('l', 'alveolar', 'approximant', true))
consonants.push(new ConsonantClassification('tʃ', 'post-alveolar', 'plosive', false))
consonants.push(new ConsonantClassification('dʒ', 'post-alveolar', 'plosive', true))
consonants.push(new ConsonantClassification('ʃ', 'post-alveolar', 'fricative', false))
consonants.push(new ConsonantClassification('ʒ', 'post-alveolar', 'fricative', true))
consonants.push(new ConsonantClassification('r', 'post-alveolar', 'approximant', true))
consonants.push(new ConsonantClassification('j', 'palatal', 'approximant', true))
consonants.push(new ConsonantClassification('ŋ', 'velar', 'nasal', true))
consonants.push(new ConsonantClassification('k', 'velar', 'plosive', false))
consonants.push(new ConsonantClassification('g', 'velar', 'plosive', true))
consonants.push(new ConsonantClassification('x', 'velar', 'fricative', false))
consonants.push(new ConsonantClassification('w', 'velar', 'approximant', true))
consonants.push(new ConsonantClassification('h', 'glottal', 'fricative', false))

//redireciona url
function redirectToPlace() {
  window.location.replace("/place.html?place")
}

function redirectToManner() {
  window.location.replace("/manner.html?manner")
}

function redirectToVoicing() {
  window.location.replace("/voicing.html?voicing")
}

function redirectToAll() {
  window.location.replace("/all.html?all")
}


var mode = window.location.search
mode = mode.replace('?', '')

// limpa o campo de dialogo
function clearAnswer() {
  document.getElementById('answer').innerHTML = ``
}

// gerando uma index aleatoria para que então seja selecionada uma consotante
var randomConsonant = ''

var generateConsonant = function () {
  randomConsonant = (consonants[(Math.floor(Math.random() * 25))])
  console.log(randomConsonant)

  // coloca a consoante no span
  if (mode === 'place') {
    document.getElementById('symbol').innerHTML = `<div id="symbol-voicing" class="question">[${randomConsonant.symbol}]</div>`
    clearAnswer()
    document.getElementById(mode).value = ''
  } else if (mode === 'voicing') {
    document.getElementById('symbol').innerHTML = `<div id="symbol-voicing" class="question">[${randomConsonant.symbol}]</div>`
    document.getElementById('voicing-btn').innerHTML = `<button class="button-voicing" id="voiced" onclick="isVoiced()">Voiced</button> <button class="button-voicing" id="voiceless" onclick="isVoiceless()">Voiceless</button>`
  } else if (mode === 'manner') {
    document.getElementById('symbol').innerHTML = `<div id="symbol-voicing" class="question">[${randomConsonant.symbol}]</div>`
    clearAnswer()
    document.getElementById(mode).value = ''
  } else {
    document.getElementById('symbol').innerHTML = `Can you classify the consonant [${randomConsonant.symbol}]?`
    clearAnswer()
    document.getElementById(mode).value = ''
  }
}

var placeValue = document.getElementById(mode)

//pega opção escolhida pelo usuario 

if (mode === 'place') {
  function verifyOption() {
    //PLACE OF ARTICULATION
    if (placeValue.value === randomConsonant.place) {
      document.getElementById('symbol-voicing').style.background = '#01A787'
    } else if (randomConsonant.place === undefined) {
      document.getElementById('answer').innerHTML = `Please, select a consonant first.`
    } else if (placeValue.value === '') {
      document.getElementById('answer').innerHTML = `Please, select an answer first.`
    } else {
      document.getElementById('symbol-voicing').style.background = '#FC6057'
    }
  }
} else if (mode === 'manner') {
  function verifyOption() {
    //MANNER OF ARTIULATION
    if (placeValue.value === randomConsonant.manner) {
      document.getElementById('symbol-voicing').style.background = '#01A787'
    } else if (randomConsonant.manner === undefined) {
      document.getElementById('answer').innerHTML = `Please, select a consonant first.`
    } else if (placeValue.value === '') {
      document.getElementById('answer').innerHTML = `Please, select an answer first.`
    } else {
      document.getElementById('symbol-voicing').style.background = '#FC6057'
    }
  }
} else if (mode === 'voicing') {
  //VOICING
  function isVoiced() {
    if (randomConsonant.voicing === true) {
      document.getElementById('voiced').style.background = '#01A787'
    } else {
      document.getElementById('voiced').style.background = '#FC6057'
    }
  }

  function isVoiceless() {
    if (randomConsonant.voicing === false) {
      document.getElementById('voiceless').style.background = '#01A787'
    } else {
      document.getElementById('voiceless').style.background = '#FC6057'
    }
  }

} else if (mode === 'all') {
  function verifyOption() {
    //ALL

  }
}