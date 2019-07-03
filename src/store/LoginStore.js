import { observable, action } from 'mobx'

const state = observable({
  user: {
    username: '',
    password: '',
    checkbox: false
  }
})

const actions = {}

actions.showChecked = action((checked) => {
  console.log('showChecked >>>>> ', checked)
  state.user.checkbox = checked
})

export default { state, actions }