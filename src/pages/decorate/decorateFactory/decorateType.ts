export interface IPageConfig {
  pageName: string;
  theme: string;
  editEnable: boolean;
  padding: number;
  backgroundColor: string;
}

export interface ComponentConfig {
  componentName: string;
  dataSource: Record<string, any>;
}

export interface IPage {
  pageInfo: IPageConfig;
  pageId: string;
  storeId: string;
  Appid: string;
  config: ComponentConfig[];
}
export interface DragResult {
  removedIndex: number;
  addedIndex: number;
  payload: any;
}
