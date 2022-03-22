import ITodo from '@/models/ITodo'
import { InjectionKey } from 'vue';
import { createStore, Store ,useStore as baseUseStore  } from 'vuex'

export const key: InjectionKey<Store<any>> = Symbol('Copy From Vuex Doc');
export const store = createStore({
  state: {
      createTodoes: [] as Array<ITodo>
  },
  mutations: {
      createTodo(state , paylaod: ITodo) {
        state.createTodoes.push(paylaod)
      },
      initTodo(state , paylaod: Array<ITodo>) {
        state.createTodoes = paylaod;
      },
      updateStatus(state , paylaod: ITodo){
         const getID =  state.createTodoes.findIndex(e => {
            return e.id === paylaod.id
          })
          state.createTodoes[getID].status.done = true
      },
      deleteTodo(state , paylaod: ITodo){
        const getID =  state.createTodoes.findIndex(e => {
            return e.id === paylaod.id
          })
          state.createTodoes.splice(getID , 1);
      }
  },
  getters:{
      getAllTodo(state): Array<ITodo> {
        return state.createTodoes;
      }
  }
})
export function useStore(): Store<any>{
    return baseUseStore(key)
}