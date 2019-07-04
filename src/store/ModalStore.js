import { observable, action } from 'mobx'

const state = observable({
  visible: false
})

const actions = {}

actions.showModal = action((show) => {
  state.visible = show
})

export default { state, actions }