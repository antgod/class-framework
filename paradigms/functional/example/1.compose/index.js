const compose = (first, ...last) => (...initArgs) => last.reduce((composed, func) => func(composed), first(...initArgs))
module.exports = compose
