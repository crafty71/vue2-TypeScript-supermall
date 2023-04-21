import request from "..";
import { IProductDetails } from "./detail";

/**
 * @description: 获取商品详情
 * @param {string} iid
 * @return {*}
 */
export const getProductDetail = (iid: string): Promise<IProductDetails> => {
  return request.get<IProductDetails>({
    url: "/detail",
    params: { iid },
  });
};
