import request from "..";
import { IReturnData } from "../request/type";
import { IHomeData } from "./home-data";
import { homeDataParams } from "./home-data-params";
import { IHomeMultiDataUse } from "./type";

/**
 * @description: 获取首页轮播图
 * @return {*} Promise<IReturnData<IHomeMultiDataUse>>
 */
export const getHomeMultiData = (): Promise<IReturnData<IHomeMultiDataUse>> => {
  return request.get<IReturnData<IHomeMultiDataUse>>({
    url: "/home/multidata",
  });
};

/**
 * @description: 获取首页下来列表数据
 * @param {homeDataParams} params
 * @return {*}  Promise<IReturnData<IHomeData>>
 */
export const getHomeData = (
  params: homeDataParams
): Promise<IReturnData<IHomeData>> => {
  return request.get<IReturnData<IHomeData>>({
    url: "home/data",
    params,
  });
};
