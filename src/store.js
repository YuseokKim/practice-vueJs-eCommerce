// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

//플로그인으로 등록하기
Vue.use(Vuex)

//스토어 만들기
const store =new Vuex.Store({
    state:{
        count:0
    },
    //state는 항상 mutation 안에서 변경해야함, state, payload를 매개변수로 받을 수 있음
    mutations: {
        mutationType(state, payload){
            state.count = payload
        }
    },
    // 비동기 처리를 포함할 수 있는 메소드, 반드시 처리 실시 후 마지막으로 뮤테이션으로 커밋
    // 대부분의 처리, 오류 throw 등 여기서 하는 것이 낫다.
    actions: {
        actionType({commit}, payload){
            // 액션 내부 커밋
            console.log("payload in actionType -> " + payload)
            commit('mutationType', payload)
        }
    }
    
})
      store.commit('mutationType',3)
      console.log(store.state.count)
      // 등록되어 있는 액션을 호출하는 인스턴스 
      store.dispatch('actionType',4)
      console.log(store.state.count)

export default store