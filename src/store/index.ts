import { IDetailStoreState } from "@/views/details/store";
import { IHomeStoreState } from "@/views/home/store";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface IRootState {
  homeStore: IHomeStoreState;
  detailStore: IDetailStoreState;
}

export default new Vuex.Store<IRootState>({});
