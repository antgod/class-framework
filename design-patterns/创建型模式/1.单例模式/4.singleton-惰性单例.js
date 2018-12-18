function createDiv () {
  var login = document.createElement('div')
  login.style.cssText = 'background:#eee;width:300px;height:200px;margin:100px auto;'
  login.innerHTML = new Date().toJSON()
  login.onclick = function () {
    login.style.display = 'none'
  }
  document.body.appendChild(login)
  return login
}

var Singleton = (function () {
  var login
  return function (fn) {
    return login || (login = fn.apply(this, arguments))
  }
})()

function login () {
  var loginDiv = Singleton(createDiv)
  loginDiv.style.display = 'block'
}
