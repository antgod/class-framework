const inject = fn => args => {
  const fnArgs = fn.toString().match(/^(?=function\s)*[^\(]*\(\s*([^\)]*)\)/m)[1].replace(/ /g, '').split(',')
  return fn(...Object.keys(args).map((key, index)=>args[fnArgs[index]]))
}

const http = {
  host: 'localhot',
  port: '8080'
}

const service = {
  addUser: ()=>null
}

const route = {
  'name': 'index',
  'path': '/index.html',
  'template': 'artTemplate',
  'title': "首页"
}

inject((http, service, route)=>console.log(http, service, route))({
  http, service, route
})