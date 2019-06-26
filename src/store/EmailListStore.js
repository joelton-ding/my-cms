import { observable, action } from 'mobx'

const professionList = [
  { label: 'Analyst' },
  { label: 'Fund Manager' },
  { label: 'Press/Media' },
  { label: 'Retail Investor' },
  { label: 'Others' }
]

const state = observable({ 
  professionData: professionList
})

const actions = {}

export default { state, actions }