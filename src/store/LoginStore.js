import { observable, action } from 'mobx'

const state = observable({
  user: {
    username: '',
    password: '',
    checkbox: false
  }
})

// //observable
// const person = observable({
//   firstName: 'Matt',
//   lastName: 'Ruby',
//   age: 37
// })

// console.log(person.firstName)

// person.firstName = 'Mike'
// console.log(person.firstName)

// person.firstName = 'Jimmy'
// console.log(person.firstName)

// //Computed
// const person1 = observable({
//   firstName: 'Matt',
//   lastName: 'Ruby',
//   age: 0,
//   fullName: function(){
//     return this.firstName + ' ' + this.lastName;
//   }
// })
// console.log(person1.fullName)

// person1.firstName = 'Mike'
// console.log(person1.fullName)

// person1.firstName = 'Jimmy'
// console.log(person1.fullName)

// const person = observable({
//   firstName: 'Matt',
//   lastName: 'Ruby',
//   age: 0
// })

// autorun(function(){
//   console.log(person.firstName + ' ' + person.age)
// })

// const _Hello = '1'
// _Hello.times(10, function(){
//   person.age = _Hello.random(40)
// })

const actions = {}

actions.showChecked = action((checked) => {
  console.log('showChecked >>>>> ', checked)
  state.user.checkbox = checked
})

export default { state, actions }