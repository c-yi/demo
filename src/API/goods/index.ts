import {request} from '@umijs/max';
import {requestPage, IPageRequest} from '../fetch'

/**
 * 创建商品
 * @param params
 */
export async function creatGoods(
  params: Omit<API_GOODS.goods, 'id'>,
) {
  return request<any>('/api/goods/create', {
    method: 'POST',
    params: {
      ...params,
    }
  });
}

/**
 * 更新商品
 * @param params
 */
export async function updateGoods(
  params: API_GOODS.goods,
) {
  return request<any>('/api/goods/update', {
    method: 'POST',
    params: {
      ...params,
    }
  });
}

/**
 * 删除商品
 * @param params
 */
export async function deleteGoods(
  params: { id: string },
) {
  return request<any>('/api/goods/delete', {
    method: 'POST',
    params: {
      ...params,
    }
  });
}

/**
 * 查看商品详情
 * @param params
 */
export async function getGoodsDetail(
  params: { id: string },
) {
  return request<API_GOODS.goods>('/api/goods/detail', {
    method: 'POST',
    params: {
      ...params,
    }
  });
}

/**
 * 获取商品列表
 * @param params
 */
export async function getGoodsList(
  params: API_GOODS.fetchGoodsList & IPageRequest,
) {
  return requestPage<API_GOODS.fetchGoodsList, API_GOODS.goods>({
    params,
    url: '/api/goods/list',
    method: 'POST'
  });
}
