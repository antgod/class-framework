function exec(cmd, callback) {
  console.log(cmd);
  setTimeout(callback.bind(cmd),1000)
}

const execEnd = '执行完毕';

exec('git add .', function(command){
  console.log([command, execEnd].join(''));
  exec(`git commit -m '版本更新'`,function(command){
    console.log([command, execEnd].join(''));
    exec(`git push origin master'`,function(command){
      console.log([command, execEnd].join(''));
    })
  })
});