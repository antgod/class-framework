var csv = `name, age, hair
  merble, 35, red
  bob, 64, blonde`;

const split = (str,  separator) => str.split(separator);

const lameCsv = (str) =>
  split(str, '\n').reduce((table, row) =>[...table, split(row, ',').filter(col=> col.trim() !== '').map(col=> col.trim())], [])

console.log(lameCsv(csv));