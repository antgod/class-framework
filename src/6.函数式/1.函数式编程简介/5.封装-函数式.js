function Team() {
  const persons = [];
  return {
    push: person => persons.push(person),
    getAll: () => persons,
  }
}
var team = Team();
team.push('张三');
team.push('李四');
team.push('王五');
console.log(team.getAll());
