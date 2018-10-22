const concatMiddlewares = (defaultListeners, middlewares) => middlewares.reduce((listeners, middleware) => middleware(listeners), defaultListeners)

const createMiddleware = (handle, listeners) => (originListeners) => {
  return Object.keys(listeners).reduce((originListener, key) => {
    originListener[key] = handle(listeners[key], key)
    return originListener
  }, originListeners)
}

module.exports = {
  concatMiddlewares,
  createMiddleware,
}
