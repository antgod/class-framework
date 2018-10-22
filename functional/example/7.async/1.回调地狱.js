function exec(cmd, callback) {
  console.log(cmd)
  setTimeout(callback.bind(cmd), 1000)
}

const execEnd = '执行完毕'

exec('git add .', (command1) => {
  console.log([command1, execEnd].join(''))
  exec('git commit -m "版本更新"', (command2) => {
    console.log([command2, execEnd].join(''))
    exec('git push origin master', (command3) => {
      console.log([command3, execEnd].join(''))
    })
  })
})
