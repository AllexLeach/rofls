const input = document.getElementById('input')
const button = document.getElementById('word')
const output = document.getElementById('output')
const randCountAnsver = {
   1: 'Мудак!',
   2: 'Завали ебало!',
   3: 'Умри нахуй!',
   4: 'Ты ахуел?!',
   5: 'Пиздец ты...'
}
const obj = {'nigger': 'большой', 'asian': 'маленький', 'white': 'нормик'}
let count = 0

function getRandomAnswer() {
   let randAns = Math.trunc(Math.random()*5) + 1
   return randAns
}

button.onclick = function trueSize() {
   let size = input.value
   size = Math.trunc(eval(size))
   if (size > 21) {
      output.innerHTML = `<h1>Не пизди!</h1>`
      count += 1
   } else if (16 < size && size <= 21) {
      output.innerHTML = `<div class='xuy'><h1>Хуй: ${obj['nigger']}</h1><h1>Кличка: nigger</h1></div>`
   } else if (10 < size && size < 17) {
      output.innerHTML = `<div class='xuy'><h1>Хуй: ${obj['white']}</h1><h1>Кличка: снежок</h1></div>`
   } else if (0 < size && size < 11) {
      output.innerHTML = `<div class='xuy'><h1>Хуй: ${obj['asian']}</h1><h1>Кличка: карлик</h1></div>`
   } else if (size <= 0) {
      output.innerHTML = `<div class='xuy'><h1>WTF??????????</h1><h1>Ты женщина?0_о</h1></div>`
   }

   if (count == 4) {
      output.innerHTML = `<div class='xuy'><h1>Не пизди!</h1><h1>${randCountAnsver[getRandomAnswer()]}</h1></div>`
   }

   if (size < 22 && count >= 2 ) {
      count = 0
   }
   if (count > 2) {
      output.innerHTML = `<h1>${randCountAnsver[getRandomAnswer()]}</h1>`
   }

   if (input.value != '') {
      input.value = ''
   }
}
