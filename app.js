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
consonants.push(new ConsonantClassification('/f/', 'labial', 'fricative', false))
consonants.push(new ConsonantClassification('/v/', 'labial', 'fricative', true))
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

// gerando uma index aleatoria para que então seja selecionada uma consotante
var randomConsonant = (consonants[(Math.floor(Math.random() * 25))])
console.log(randomConsonant)

// coloca a consoante no span
document.getElementById('symbol').innerHTML = randomConsonant.symbol

//pega opção escolhida pelo usuario 

function verifyOption() {
  var options = document.getElementsByName('option');
  var placeValue
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      placeValue = options[i].value
    }

  }

  //retorno da resposta

  console.log(placeValue)

  if (placeValue === randomConsonant.place) {
    document.getElementById(randomConsonant.place).style.background = 'green'
  } else if (placeValue === undefined) {
    alert('Please, select an answer.')
  } else {
    document.getElementById(placeValue).style.background = 'red'
    document.getElementById(randomConsonant.place).style.background = 'green'
  }
}