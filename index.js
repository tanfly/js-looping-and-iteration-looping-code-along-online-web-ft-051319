let cards = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
      cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards
  }

  function countdown(number) {
  let i = number;
  while (i >= 0) {
      console.log(i--);
    }
}
