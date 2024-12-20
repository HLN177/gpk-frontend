import type { Product } from '@/types/widget';
import service from './axios';

const URL = {
  PRODUCT_WIDGE: '/product-widgets'
};

function getProductWidgets(): Promise<Product[]> {
  return service.get(URL.PRODUCT_WIDGE);
}

export { getProductWidgets };
