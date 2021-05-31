// eslint-disable-next-line no-unused-vars
import axios from "axios";
import Vuex from 'vuex'

const state = {
    sapceXData: null
}

const getters = {
    sapceXData: state => state.sapceXData
}

const actions = {
    getSpaceXData({ commit }) {
        return axios.get('https://api.spacexdata.com/v3/launches?limit=100').then(resp => {
            // console.log(resp)
            commit('setSpaceXData', resp)
            return resp;
        }).catch(err => console.error(err))
    }
}

const mutations = {
    setSpaceXData(state, resp) {
        state.sapceXData = resp
    }
}


const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store;