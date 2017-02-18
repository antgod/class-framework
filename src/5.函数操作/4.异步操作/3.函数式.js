const execStart = '执行开始';
const execEnd = '执行完毕';

const promiseChain = (currentPromise, ...nextPromise) =>
  Promise.resolve(currentPromise && currentPromise().then(() => nextPromise.length > 0 && promiseChain(...nextPromise)))


const exec = (cmd, callback)=> {
  console.log([cmd, execStart].join(' '));
  setTimeout(callback, 1000);
};

const cmd = (cmd)=> ()=>
  new Promise((res) => {
    exec(cmd, ()=> {
      console.log([cmd, execEnd].join(' '));
      res()
    })
  })

const callback = (command, end, nextCmd) => {
  console.log([command, end].join(' '));
  return nextCmd;
};

promiseChain(
  cmd('git add .'),
  cmd('git commit -m '),
  cmd('git push origin master')
).then(()=>{
  console.log('提交完毕');
});