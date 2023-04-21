import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import store from "@/store";
import { IHomeMultiDataUse } from "@/service/home/type";
import { getHomeData, getHomeMultiData } from "@/service/home";
import { homeDataParams } from "@/service/home/home-data-params";
import { IHomeData } from "@/service/home/home-data";

export interface IHomeStoreState {
  HomeMultiData: IHomeMultiDataUse;
  homeData: IHomeData;
  type: string;
  page: number;
}

@Module({ dynamic: true, store, name: "homeStore" })
class HomeStore extends VuexModule implements IHomeStoreState {
  public HomeMultiData = {} as IHomeMultiDataUse;
  public homeData: IHomeData = {} as IHomeData;
  public type = "sell";
  public page = 1;

  /**
   * @description: 赋值HomeMultiData
   * @return {*}
   */
  @Mutation
  public setHomeMultiData(data: IHomeMultiDataUse): void {
    this.HomeMultiData = data;
  }

  /**
   * @description: 赋值type
   * @return {*}
   */
  @Mutation
  public setType(type: string): void {
    this.type = type;
  }

  /**
   * @description: 赋值page
   * @param {number} page
   * @return {*}
   */
  @Mutation
  public setPage(page: number): void {
    this.page = page;
  }

  /**
   * @description: 获取首页轮播图数据
   * @return {*}
   */
  @Action
  public async getHomeMultiDataAction(): Promise<void> {
    const res = await getHomeMultiData();
    this.setHomeMultiData(res.data);
  }

  /**
   * @description: 赋值homeData
   * @return {*}
   */
  @Mutation
  public setHomeDataMutation(data: IHomeData): void {
    this.homeData = data;
  }

  /**
   * @description: 获取首页列表数据
   * @return {*}
   */
  @Action
  public async getHomeDataAction(
    params: homeDataParams = { type: this.type, page: this.page }
  ): Promise<void> {
    const res = await getHomeData(params);
    this.setHomeDataMutation(res.data);
  }
}

export const HomeStoreModule = getModule(HomeStore);
