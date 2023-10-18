declare namespace API_GOODS {
  type fetchGoodsList = {
    storeId?: string,
    goodsName?: string  
  }

  /**
   * 商品库存状态（是否售罄）
   */
  enum IS_SELL_OUT {
    /**
     * 售罄
     */
    SELL_OUT,
    /**
     * 未售罄
     */
    NOT_SELL_OUT
  }

  /**
   * 商品上架状态
   */
  enum IS_SHELVES {
    /**
     * 上架
     */
    SHELVES,
    /**
     * 下架
     */
    OFF_SHELF,
  }

  type goods = {
    id: string
    goodsName: string
    goods_picture: string
    price: {
      labelPrice: string
      salePrice: string
    }
    shelve: IS_SHELVES
    sale: IS_SELL_OUT
  }
}
