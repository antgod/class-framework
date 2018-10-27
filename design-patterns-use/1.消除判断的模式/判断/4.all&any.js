const all = (...funs) => condition => funs.reduce((truth, fun) => (truth && fun() === condition), true)

const any = (...funs) => condition => funs.reduce((truth, fun) => (truth || fun() === condition), false)