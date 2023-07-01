
import state from './state'
import * as mutations  from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterStore = {
  // esto debe estar siempre
  namespaced: true,
  state,
  // mutaciones son SINCRONAS
  mutations,
  // Puedes ser ASINCRONA
  actions,
  // son parecidas a computed
  getters
}

export default counterStore