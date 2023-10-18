import {request} from "@umijs/max";


export type IPageRequest = {
  pageSize: number,
  current: number,
  offset?: number
  sort?: Record<string, unknown>,
  [key: string]: unknown
}
type IPageResponse = {
  pageSize: number,
  current: number,
  total: number,
  [key: string]: unknown
}

type IPageRequestProps<T> = {
  params: IPageRequest & T,
  url: string,
  method?: 'POST' | 'GET',
  options?: unknown
}

/**
 * 获取翻页请求
 */
export async function requestPage<T, K>(
  props: IPageRequestProps<T>
) {
  return request<IPageResponse & { data: K[] }>(props.url, {
    method: props.method,
    params: {
      ...props.params,
    },
    ...(props?.options ?? {})
  });
}
