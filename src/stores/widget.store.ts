import type { ColorType, Product } from '@/types/widget';
import { getProductWidgets } from '@/api/service';
import { defineStore } from 'pinia';

export const useWidgetStore = defineStore('widgetStore', () => {
  const products = ref<Product[]>([]);

  async function fetchProducts() {
    const result = await getProductWidgets();
    products.value = result || [];
  }

  function updateActive(id: number, isActive: boolean) {
    products.value.forEach(product => {
      if (product.id === id) {
        product.active = isActive;
      }

      if (product.id !== id && isActive) {
        product.active = false;
      }
    });
  }

  function updateLink(id: number, isLink: boolean) {
    const product = products.value.find(p => p.id === id);
    if (product) {
      product.linked = isLink;
    }
  }

  function updateColor(id: number, color: ColorType) {
    const product = products.value.find(p => p.id === id);
    if (product) {
      product.selectedColor = color;
    }
  }

  return {
    products,
    fetchProducts,
    updateActive,
    updateLink,
    updateColor
  };
});
