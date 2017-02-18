const execStart = '执行开始';
const execEnd = '执行完毕';

const exec = (cmd, callback)=> {
  console.log([cmd, execStart].join(' '));
  setTimeout(callback, 2000);
};

function cmd(cmd) {
  if(cmd){
    return new Promise((res) => {
      exec(cmd, ()=> {
        console.log([cmd, execEnd].join(' '));
        res(cmd);
      })
    })
  }
}

cmd('git add .')
.then(command=>cmd(`git commit -m '版本更新'`))
.then(command=>cmd('git push origin master'));