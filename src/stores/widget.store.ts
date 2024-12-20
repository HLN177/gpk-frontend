import type { ColorType, Product } from '@/types/widget';
import { getProductWidgets } from '@/api/service';
import { defineStore } from 'pinia';

// const tmp = [{
//   id: 1,
//   type: 'carbon',
//   amount: 2,
//   action: 'offsets',
//   active: false,
//   linked: false,
//   selectedColor: 'green'
// }, {
//   id: 2,
//   type: 'trees',
//   amount: 15,
//   action: 'plants',
//   active: false,
//   linked: true,
//   selectedColor: 'black'
// }, {
//   id: 3,
//   type: 'plastic',
//   amount: 300,
//   action: 'collects',
//   active: true,
//   linked: true,
//   selectedColor: 'beige'
// }];

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
