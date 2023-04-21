export interface IHomeMultiData {
  _id: string;
  data: Data;
  returnCode: string;
  success: boolean;
}

/** 接口getHomeMultiData返回数据 */
export interface IHomeMultiDataUse {
  /** 关键字 */
  keywords: Keywords;
  dKeyword: DKeyword;
  recommend: Recommend;
  banner: Banner;
}

export interface Keywords {
  context: Context;
  isEnd: boolean;
  list: List[];
  nextPage: number;
}

export interface Context {
  currentTime: number;
}

export interface List {
  is_red: string;
  words: string;
  acm: string;
}

export interface DKeyword {
  context: Context2;
  isEnd: boolean;
  list: List2[];
  nextPage: number;
}

export interface Context2 {
  currentTime: number;
}

export interface List2 {
  defaultKeyWord: string;
  acm: string;
}

export interface Recommend {
  context: Context3;
  isEnd: boolean;
  list: List3[];
  nextPage: number;
}

export interface Context3 {
  currentTime: number;
}

export interface List3 {
  image: string;
  link: string;
  acm: string;
  sort: number;
  title: string;
}

export interface Banner {
  context: Context4;
  isEnd: boolean;
  list: List4[];
  nextPage: number;
}

export interface Context4 {
  currentTime: number;
}

export interface List4 {
  image: string;
  width923: number;
  height923: number;
  link: string;
  width: number;
  acm: string;
  title: string;
  image923: string;
  height: number;
}
