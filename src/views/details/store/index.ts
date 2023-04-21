import { getProductDetail } from "./../../../service/detail/index";
import { IProductDetailsResult } from "@/service/detail/detail";
import store from "@/store";
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";

export interface IDetailStoreState {
  productDetail: IProductDetailsResult;
}

@Module({ dynamic: true, store, name: "detailStore" })
class DetailStore extends VuexModule implements IDetailStoreState {
  productDetail: IProductDetailsResult = {} as IProductDetailsResult;

  @Mutation
  public setProductDetails(date: IProductDetailsResult) {
    this.productDetail = date;
  }

  @Action
  public async getProductDetailAction(id: string) {
    const res = await getProductDetail(id);
    this.setProductDetails(res.result);
  }
}

export const DetailStoreModule = getModule(DetailStore);
