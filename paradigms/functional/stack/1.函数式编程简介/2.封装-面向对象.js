function Team() {
  this.persons = []
}

Team.prototype.push = function(person) {
  this.persons.push(person)
}

Team.prototype.getAll = function() {
  return this.persons
}

const team = new Team()
team.push('张三')
team.push('李四')
team.push('王五')
console.log(team.getAll())
