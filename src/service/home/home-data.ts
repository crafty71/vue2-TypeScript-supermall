export interface IHomeData {
  filter: Filter;
  total: number;
  param: Param;
  page: number;
  sort: string;
  list: List2[];
  title: string;
  isEnd: boolean;
  ptpPartC: string;
  cpc_offset: number;
}

export interface Filter {
  title: string;
  list: List[];
}

export interface List {
  fcid: string;
  style: any;
  sort: string;
  title: string;
  type: string;
}

export interface Param {
  eventId: number;
  cKey: string;
  fcid: string;
  cpcEventId: number;
  section: string;
  _mgjuuid: string;
  sort: string;
  page: string;
  ptpWallDoc: string;
  ptpPartC: string;
  cpc_offset: number;
  ptpWallCpc: string;
}

export interface List2 {
  itemType: number;
  ptpC: string;
  titleTags: any;
  clientUrl: string;
  iid: string;
  showLarge: ShowLarge;
  link: string;
  show: Show;
  itemMarks: string;
  acm: string;
  type: number;
  title: string;
  orgPrice: string;
  cparam?: string;
  props: string[];
  lefttop_taglist: any[];
  sale: any;
  price: string;
  cfav: any;
  leftbottom_taglist: string[];
  shopId: any;
  popularStar?: number;
}

export interface ShowLarge {
  img: string;
  w: number;
  h: number;
}

export interface Show {
  img: string;
  w: number;
  h: number;
}
