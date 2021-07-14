const state = {
  clearComponentCBType: false, // 清除 父业务
  clearComponentCBSonType: false, // 清除 子业务
}
import { CLEAR_COMPONENT_C_TYPT, CLEAR_COMPONENT_C_B_TYPT, } from "../mutation-type"

const mutations = {
  [CLEAR_COMPONENT_C_TYPT] (state, payload) {
    state.clearComponentCBType = payload
  },
  [CLEAR_COMPONENT_C_B_TYPT] (state, payload) {
    state.clearComponentCBSonType = payload
  },
}


export default {
  state,
  mutations,
}