import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Начальное состояние
    visibleComponent: "",
  },
  mutations: {
    //Методы изменения состояния
    setVisibleComponent(state, visibleComponentName) {
      state.visibleComponent = visibleComponentName;
    },
  },
  actions: {
    //Методы для асинхронных операций
  },
  getters: {
    //Методы чтения состояния
  },
  modules: {
    //Модули VueX для разделения хранилища на подхранилища
  },
});
