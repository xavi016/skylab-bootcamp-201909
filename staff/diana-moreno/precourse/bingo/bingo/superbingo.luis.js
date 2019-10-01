const pickFromList = list =>
  list.splice(Math.floor(Math.random() * list.length), 1)[0]

const generateCard = numbers => {
  const addCard = cards => cards.concat({
    number: pickFromList(numbers),
    crossed: false,
  })
  const bingoCard = Array(15).fill().reduce(addCard, []);
  return [
    bingoCard.slice(0, 5),
    bingoCard.slice(5, 10),
    bingoCard.slice(10, 15),
  ]
}

const greetUser = game => {
  const name = prompt('Welcome to my Bingo, whats your name?')
  game.user = name
  alert(`Hello ${name}`)
  showCard(game.card)
}

const numberToString = n => n > 9 ? n : `0${n}`

const lineToString = (str, { number, crossed }) =>
  `${str} ${crossed ? 'XX' : numberToString(number)}`

const showLine = line => console.log(line.reduce(lineToString, ''))

const showCard = card =>
  console.log('Your card is:') || card.map(showLine)

const continuePlaying = name =>
  confirm(`${name}: Do you want to keep playing?`) || alert(':( bye then!')

const pickNumber = remainingBingoNumbers =>
  [pickFromList(remainingBingoNumbers)]
    .map(n => console.log(`The number is: ${n}`) || n)[0]

const crossNumberInCard = (card, number) => {
  const numberInCardMsg = n => `Number ${n} is in your card, let's cross it`
  card.forEach(line =>
    line.forEach(n => {
      if(n.number === number) {
        n.crossed = true
        alert(numberInCardMsg(n.number))
        console.log(numberInCardMsg(n.number))
        showCard(card)
      }
    })
  )
  return card
}

const checkCardForLine = card =>
  card.some(line => line.every(elem => elem.crossed))

const checkCardForBingo = card =>
  card.every(line => line.every(elem => elem.crossed))

const playUntilCondition = (condition, fn, game) => {
  while(!condition && continuePlaying(game.user)) {
    game.numberOfPlays++
    game.card = crossNumberInCard(game.card, pickNumber(game.numbers))
    condition = fn(game.card);
  }
  return game
}

const playUntilLine = game => {
  playUntilCondition(game.isLine, checkCardForLine, game);
  console.log(`${game.user}, you scored a Line!`)
  showCard(game.card)
}

const playUntilBingo = game => {
  playUntilCondition(game.isBingo, checkCardForBingo, game);
  console.log(`${game.user}, You scored a Bingo!`)
  console.log(`${game.user}, it took you ${game.numberOfPlays} plays`)
}

const playGame = () => {
  let numbers = Array(90).fill().map((_, i) => i + 1); // [1...90]
  let game = {
    user: '',
    numberOfPlays: 0,
    isLine: false,
    isBingo: false,
    card: generateCard([...numbers]),
    numbers: [...numbers],
  };
  greetUser(game)
  playUntilLine(game)
  playUntilBingo(game)
}
playGame()
