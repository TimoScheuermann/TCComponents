/* eslint-disable */
import { VMComp, VMProp } from '@/utils/ComponentManager';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dark: false,
    desktop: false,
    sidebar: false,
    compQuery: '',
    comps: [],
    props: [],
  },
  getters: {
    dark: (state: any): boolean => {
      return state.dark;
    },
    desktop: (state: any): boolean => {
      return state.desktop;
    },
    sidebar: (state: any): boolean => {
      return state.sidebar;
    },
    compQuery: (state: any): string => {
      return state.compQuery;
    },
    comps: (state: any): VMComp[] => {
      return state.comps;
    },
    props: (state: any): VMProp[] => {
      return state.props;
    },
  },
  mutations: {
    dark(state: any, dark: boolean) {
      state.dark = dark;
    },
    desktop(state: any, desktop: boolean) {
      state.desktop = desktop;
    },
    sidebar(state: any, sidebar: boolean) {
      state.sidebar = sidebar;
    },
    compQuery(state: any, query: string) {
      state.compQuery = query;
    },
    comps(state: any, comps: VMComp[]) {
      state.comps = comps;
    },
    props(state: any, props: VMProp[]) {
      state.props = props;
    },
  },
});
