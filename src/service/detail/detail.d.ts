export interface IProductDetails {
  _id: string;
  status: Status;
  result: Result;
  iid: string;
}

export interface Status {
  code: number;
  msg: string;
}

export interface IProductDetailsResult {
  skuInfo: SkuInfo;
  itemInfo: ItemInfo;
  topBar: TopBar;
  detailInfo: DetailInfo;
  columns: string[];
  promotions: Promotions;
  itemParams: ItemParams;
  shopInfo: ShopInfo;
  rate: Rate;
  itemTags: ItemTag[];
  isLogin: boolean;
  esi: string;
}

export interface SkuInfo {
  title: string;
  skus: Sku[];
  props: Prop[];
  styleKey: string;
  sizeKey: string;
  priceRange: string;
  defaultPrice: string;
  isAbroad: boolean;
  totalStock: number;
}

export interface Sku {
  stockId: string;
  xdSkuId: string;
  price: number;
  nowprice: number;
  img: string;
  currency: string;
  stock: number;
  style: string;
  size: string;
  styleId: number;
  sizeId: number;
}

export interface Prop {
  label: string;
  list: List[];
  isDefault: boolean;
}

export interface List {
  type: string;
  name: string;
  isDefault: boolean;
  styleId?: number;
  index: number;
  sizeId?: number;
}

export interface ItemInfo {
  desc: string;
  userId: string;
  shopId: string;
  title: string;
  discountDesc: string;
  discountBgColor: string;
  lowPrice: string;
  highPrice: string;
  lowNowPrice: string;
  highNowPrice: string;
  iid: string;
  isSelf: boolean;
  isFaved: boolean;
  imUrl: string;
  state: number;
  topImages: string[];
  oldPrice: string;
  price: string;
  saleType: number;
  tags: string;
  inActivity: boolean;
  redPacketsSwitch: boolean;
  cFav: number;
  admin: boolean;
  cids: string;
  cartNum: number;
  extra: Extra;
  addCartTips: boolean;
  isGrayUser: boolean;
  isNewComer: boolean;
}

export interface Extra {
  deliveryTime: number;
  sendAddress: string;
}

export interface TopBar {
  img: string;
  link: string;
}

export interface DetailInfo {
  desc: string;
  detailImage: DetailImage[];
}

export interface DetailImage {
  desc: string;
  key: string;
  anchor: string;
  list: string[];
}

export interface Promotions {
  link: string;
  alertData: AlertData;
  list: string[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AlertData {}

export interface ItemParams {
  info: Info;
  rule: Rule;
}

export interface Info {
  set: Set[];
  key: string;
  anchor: string;
}

export interface Set {
  value: string;
  key: string;
}

export interface Rule {
  tables: string[][][];
  key: string;
  anchor: string;
  disclaimer: string;
}

export interface ShopInfo {
  score: Score[];
  services: Service[];
  categories: Category[];
  cFans: number;
  cSells: number;
  allGoodsUrl: string;
  shopUrl: string;
  isMarked: boolean;
  cGoods: number;
  userId: string;
  shopLogo: string;
  name: string;
  shopId: string;
  type: number;
  level: number;
  nonsupportReasonRefound: boolean;
}

export interface Score {
  name: string;
  score: number;
  isBetter: boolean;
}

export interface Service {
  icon: string;
  name: string;
}

export interface Category {
  name: string;
  link: string;
}

export interface Rate {
  list: List2[];
  cRate: number;
}

export interface List2 {
  user: User;
  rateId: string;
  content: string;
  created: number;
  isAnonymous: number;
  style: string;
  isEmpty: number;
  level: string;
  canExplain: boolean;
}

export interface User {
  uid: string;
  uname: string;
  avatar: string;
  profileUrl: string;
  tagIndex: string;
}

export interface ItemTag {
  icon: string;
  name: string;
  content: string;
}
