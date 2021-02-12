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
consonants.push(new ConsonantClassification('m', 'bilabial', 'nasal', 'voiced'))
consonants.push(new ConsonantClassification('p', 'bilabial', 'plosive', 'voiceless'))
consonants.push(new ConsonantClassification('b', 'bilabial', 'plosive', 'voiced'))
consonants.push(new ConsonantClassification('f', 'labio-dental', 'fricative', 'voiceless'))
consonants.push(new ConsonantClassification('v', 'labio-dental', 'fricative', 'voiced'))
consonants.push(new ConsonantClassification('θ', 'dental', 'fricative', 'voiceless'))
consonants.push(new ConsonantClassification('ð', 'dental', 'fricative', 'voiced'))
consonants.push(new ConsonantClassification('n', 'alveolar', 'nasal', 'voiced'))
consonants.push(new ConsonantClassification('t', 'alveolar', 'plosive', 'voiceless'))
consonants.push(new ConsonantClassification('d', 'alveolar', 'plosive', 'voiced'))
consonants.push(new ConsonantClassification('s', 'alveolar', 'fricative', 'voiceless'))
consonants.push(new ConsonantClassification('z', 'alveolar', 'fricative', 'voiced'))
consonants.push(new ConsonantClassification('l', 'alveolar', 'approximant', 'voiced'))
consonants.push(new ConsonantClassification('tʃ', 'post-alveolar', 'plosive', 'voiceless'))
consonants.push(new ConsonantClassification('dʒ', 'post-alveolar', 'plosive', 'voiced'))
consonants.push(new ConsonantClassification('ʃ', 'post-alveolar', 'fricative', 'voiceless'))
consonants.push(new ConsonantClassification('ʒ', 'post-alveolar', 'fricative', 'voiced'))
consonants.push(new ConsonantClassification('r', 'post-alveolar', 'approximant', 'voiced'))
consonants.push(new ConsonantClassification('j', 'palatal', 'approximant', 'voiced'))
consonants.push(new ConsonantClassification('ŋ', 'velar', 'nasal', 'voiced'))
consonants.push(new ConsonantClassification('k', 'velar', 'plosive', 'voiceless'))
consonants.push(new ConsonantClassification('g', 'velar', 'plosive', 'voiced'))
consonants.push(new ConsonantClassification('x', 'velar', 'fricative', 'voiceless'))
consonants.push(new ConsonantClassification('w', 'velar', 'approximant', 'voiced'))
consonants.push(new ConsonantClassification('h', 'glottal', 'fricative', 'voiceless'))

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
    document.getElementById('symbol').innerHTML = `<div id="symbol-voicing" class="question">[${randomConsonant.symbol}]</div>`

    document.getElementById('all-opt').innerHTML =
      `
    <span id="answer"></span><br />
    <select class="option" id="voicing">
      <option value="">Select its voicing</option>
      <option value="voiced">Voiced</option>
      <option value="voiceless">Voiceless</option>
    </select>

    <select class="option" id="place">
      <option value="">Select its place</option>
      <option value="alveolar">Alveolar</option>
      <option value="bilabial">Bilabial</option>
      <option value="dental">Dental</option>
      <option value="glottal">Glottal</option>
      <option value="labio-dental">Labio-dental</option>
      <option value="post-alveolar">Post-alveolar</option>
      <option value="palatal">Palatal</option>
      <option value="velar">Velar</option>
    </select>

    <select class="option"  id="manner">
      <option value="">Select its manner</option>
      <option value="approximant">Approximant</option>
      <option value="fricative">Fricative</option>
      <option value="nasal">Nasal</option>
      <option value="plosive">Plosive</option>
    </select>
    `

    document.getElementById('btn-chk').innerHTML = `<button id="checkQuestion" class="next-button" onclick="verifyOptionAll()">Check</button>`
    document.getElementById('generateConsonant').innerText = 'Next'
    clearAnswer()
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
      document.getElementById('answer').innerText = `Please, select a consonant first.`
    } else if (placeValue.value === '') {
      document.getElementById('answer').innerText = `Please, select an answer first.`
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
      document.getElementById('answer').innerText = `Please, select a consonant first.`
    } else if (placeValue.value === '') {
      document.getElementById('answer').innerText = `Please, select an answer first.`
    } else {
      document.getElementById('symbol-voicing').style.background = '#FC6057'
    }
  }
} else if (mode === 'voicing') {
  //VOICING
  function isVoiced() {
    if (randomConsonant.voicing === 'voiced') {
      document.getElementById('voiced').style.background = '#01A787'
    } else {
      document.getElementById('voiced').style.background = '#FC6057'
    }
  }

  function isVoiceless() {
    if (randomConsonant.voicing === 'voiceless') {
      document.getElementById('voiceless').style.background = '#01A787'
    } else {
      document.getElementById('voiceless').style.background = '#FC6057'
    }
  }

} else if (mode === 'all') {
  //ALL
  function verifyOptionAll() {
    var voicingValue = document.getElementById('voicing').value
    var mannerValue = document.getElementById('manner').value
    var placeValue = document.getElementById('place').value

    if (voicingValue == randomConsonant.voicing && mannerValue == randomConsonant.manner && placeValue == randomConsonant.place) {
      document.getElementById('answer').innerText = 'Correct!'
      document.getElementById('symbol-voicing').style.background = '#01A787'
    } else {
      document.getElementById('answer').innerText = 'Wrong! :C'
      document.getElementById('symbol-voicing', 'answer').style.background = '#FC6057'
    }
  }
}