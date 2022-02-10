import Vue from 'vue'
import Vuex from 'vuex'
import { application } from '@/store/modules/application-states'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        application
    }
})
