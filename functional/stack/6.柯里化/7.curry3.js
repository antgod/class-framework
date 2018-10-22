const _ = require('underscore')

const curry3 = fun => last => middle => first => fun(first, middle, last)

const songToString = song => [song.artist, song.track].join('-')
// test
const plays = [
  { artist: 'burial', track: 'archangle' },
  { artist: 'frost', track: 'stomp' },
  { artist: 'frost', track: 'stomp' },
  { artist: 'burial', track: 'archangle' },
]

const songsPlayed = curry3(_.uniq)(false)(songToString)

console.log(songsPlayed(plays))

const toHex = (n) => {
  const hex = n.toString(16)
  return (hex.length < 2) ? [0, hex].join('') : hex
}

const rgbToHexString = (r, g, b) => {
  return ['#', toHex(r), toHex(g), toHex(b)].join('')
}

const blueGreenish = curry3(rgbToHexString)(255)(200)

console.log(blueGreenish(0))