/*
    SCRIPT CREATED BY CAIKE LAURENTINO
    CAIKELAURENTINO.COM.BR
*/

class ConsonantClassification {
  constructor(symbol, place, manner, voicing) {
    this.symbol = symbol
    this.place = place
    this.manner = manner
    this.voicing = voicing
  }
}

let consonants = Array()
consonants.push(new ConsonantClassification('/m/', 'labial', 'nasal', null))
consonants.push(new ConsonantClassification('/p/', 'labial', 'plosive', false))
consonants.push(new ConsonantClassification('/b/', 'labial', 'plosive', true))
consonants.push(new ConsonantClassification('/f/', 'labio-dental', 'fricative', false))
consonants.push(new ConsonantClassification('/v/', 'labio-dental', 'fricative', true))
consonants.push(new ConsonantClassification('/θ/', 'dental', 'fricative', false))
consonants.push(new ConsonantClassification('/ð/', 'dental', 'fricative', true))
consonants.push(new ConsonantClassification('/n/', 'alveolar', 'nasal', null))
consonants.push(new ConsonantClassification('/t/', 'alveolar', 'plosive', false))
consonants.push(new ConsonantClassification('/d/', 'alveolar', 'plosive', true))
consonants.push(new ConsonantClassification('/s/', 'alveolar', 'fricative', false))
consonants.push(new ConsonantClassification('/z/', 'alveolar', 'fricative', true))
consonants.push(new ConsonantClassification('/l/', 'alveolar', 'approximant', null))
consonants.push(new ConsonantClassification('/tʃ/', 'post-alveolar', 'plosive', false))
consonants.push(new ConsonantClassification('/dʒ/', 'post-alveolar', 'plosive', true))
consonants.push(new ConsonantClassification('/ʃ/', 'post-alveolar', 'fricative', false))
consonants.push(new ConsonantClassification('/ʒ/', 'post-alveolar', 'fricative', true))
consonants.push(new ConsonantClassification('/r/', 'post-alveolar', 'approximant', null))
consonants.push(new ConsonantClassification('/j/', 'palatal', 'approximant', null))
consonants.push(new ConsonantClassification('/ŋ/', 'velar', 'nasal', null))
consonants.push(new ConsonantClassification('/k/', 'velar', 'plosive', false))
consonants.push(new ConsonantClassification('/g/', 'velar', 'plosive', true))
consonants.push(new ConsonantClassification('/x/', 'velar', 'fricative', false))
consonants.push(new ConsonantClassification('/w/', 'velar', 'approximant', null))
consonants.push(new ConsonantClassification('/h/', 'glottal', 'fricative', null))

// limpa o campo de dialogo
function clearAnswer() {
  document.getElementById('answer').innerHTML = ``
}

// gerando uma index aleatoria para que então seja selecionada uma consotante
var randomConsonant = ''

var generateConsonant = function () {
  randomConsonant = (consonants[(Math.floor(Math.random() * 25))])

  // coloca a consoante no span
  document.getElementById('symbol').innerHTML = `What's the place of articulation of ${randomConsonant.symbol}?`
  clearAnswer()
  document.getElementById('place').value = ''
}

//pega opção escolhida pelo usuario 

function verifyOption() {
  var placeValue = document.getElementById('place')

  //retorno da resposta

  if (placeValue.value === randomConsonant.place) {
    document.getElementById('answer').style.color = '#01A787'
    document.getElementById('answer').innerHTML = `You're right! The consonant ${randomConsonant.symbol} is ${randomConsonant.place}.`
  } else if (placeValue.value === '') {
    document.getElementById('answer').innerHTML = `Please, select an answer first.`
  } else if (randomConsonant.place === undefined) {
    document.getElementById('answer').innerHTML = `Please, select a consonant first.`
  } else {
    document.getElementById('answer').style.color = '#FC6057'
    document.getElementById('answer').innerHTML = `You're wrong! Try again or click the next button.`
  }
}