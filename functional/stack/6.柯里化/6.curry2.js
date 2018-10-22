const _ = require('underscore')

const curry2 = fun => second => first => fun(first, second)

// test
const div = (n, d) => n / d
const div10 = curry2(div)(10)

console.log(div10(50))

// test
const parseBinaryString = curry2(parseInt)(2)

console.log(parseBinaryString('111'))

console.log(parseBinaryString('10'))

// test
const plays = [
  { artist: 'burial', track: 'archangle' },
  { artist: 'frost', track: 'stomp' },
  { artist: 'frost', track: 'stomp' },
  { artist: 'burial', track: 'archangle' },
]
const songToString = song => [song.artist, song.track].join('-')

console.log(_.countBy(plays, songToString))

const songCount = curry2(_.countBy)(songToString)

console.log(songCount(plays))
