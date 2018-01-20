Vue.config.productionTip = true
var store = new Vuex.Store({
    state: {
        count: []
    },
    mutations: {
        add(state) {
            state.count.push()
        }
    },
    getters: {
        sum(state, getters) {
        	console.log(state.count)
            return state.count.reduce(function (a, b) {
                return a + b
            }, 0)
        }
    },
})



var vm = new Vue({
    el: "#app",
    store: store,
    components: {
        "counter": Counter
    },
   
       
})

