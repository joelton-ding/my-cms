import { observable, action } from 'mobx'

const state = observable({ 
  collapsed: false
})
const actions = {}

actions.showToggle = action((show)=>{
  console.log('show', show)
  state.collapsed = show
})

export default { state, actions }