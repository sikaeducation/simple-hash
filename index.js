function getLetterPosition(character){
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const lowerCasedCharacter = character.toLowerCase()
  const position = alphabet.indexOf(lowerCasedCharacter)

  return +position + 1 // Offset index
}

function accumulate(startingValue, number){
  return +startingValue + +number
}

function simpleHash(string){
  let hash = getLetterPosition(string)

  hash = string.split("").map(getLetterPosition).reduce(accumulate, 0)

  while (`${hash}`.length > 1){
    hash = `${hash}`.split("").reduce(accumulate, 0)
  }

  return hash
}

console.log(
  simpleHash(process.argv[2])
)

module.exports = {
  getLetterPosition,
  accumulate,
  simpleHash,
}
