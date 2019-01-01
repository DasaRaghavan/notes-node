let person = {
  name: 'Dasa',
  age: 51,
  introduction () {
    // console.log(arguments.length)
    return (`this is ${this.name}. My age is ${this.age}. I am ${arguments[0]} and ${arguments[1]}`)
  }
}

console.log(person.introduction('Awesome', 'Amazing'));
