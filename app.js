var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var words = ["by", "dog", "wolf", "family", "eaten", "camping"]
var people = [
    { name: "Angelina Jolie", member: true, age: 80 },
    { name: "Eric Jones", member: false,age: 2  },
    { name: "Paris Hilton", member: true,age: 5 },
    { name: "Kayne West", member: false, age:16 },
    { name: "Bob Ziroll", member: true,age: 100 }
]

function fiveAndGreaterOnly(numbers) {
    const result = numbers.filter(numbers => numbers >= 5)
    console.log(result)
}
fiveAndGreaterOnly(numbers)

function evenOnly(numbers) {
    const result = numbers.filter(numbers => numbers % 2 === 0)
    console.log(result)
}
evenOnly(numbers)

function smallWords(words) {
    const result = words.filter(words => words.length <= 5)
    console.log(result)
}
smallWords(words)

function clubMembers(people) {
    const result = people.filter(people => people.member === true )
    console.log(result)
}
clubMembers(people)

function matrix(people) {
    const result = people.filter(people => people.age >= 18)
    console.log(result)
}
matrix(people)