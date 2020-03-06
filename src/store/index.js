import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        data: []
    },
    mutations: {
        loadpersons(state, payload) {
            state.data = payload.data;
        },
        savepersons(state, payload) {
            state.data.push(payload.data);
        },
        deletepersons(state, payload) {
            let index = state.data.findIndex(item => item.ID == payload.data.ID)
            state.data.splice(index, 1);
        },
    },
    actions: {
        async loadpersons({ commit }) {
            console.log("something")
            await axios.get("api/listperson").then(response => {
                console.log(response.data);
                commit("loadpersons", response);
            });
        },
        async savepersons({ commit }, payload) {
            console.log("likable")
            await axios.post("api/savepersons", payload).then(response => {
                console.log(response.date);
                commit("savepersons", response)
            });
        },
        async deletepersons({ commit }, ID) {
            console.log("lost")
            await axios.get(`api/deletepersons?id=${ID}`).then(response => {
                console.log(response.date);
                commit("deletepersons", response)
            });
        },


    },
    modules: {}
});