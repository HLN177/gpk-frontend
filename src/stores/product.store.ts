import { defineStore } from 'pinia';

export interface Product {
  id: number
  type: 'carbon' | 'plastic' | 'trees'
  amount: number
  action: 'collects' | 'plants' | 'offsets'
  active: boolean
  linked: boolean
  selectedColor: 'white' | 'black' | 'blue' | 'green' | 'beige'
}

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([{
    id: 1,
    type: 'carbon',
    amount: 2,
    action: 'offsets',
    active: false,
    linked: false,
    selectedColor: 'green'
  }, {
    id: 2,
    type: 'trees',
    amount: 15,
    action: 'plants',
    active: false,
    linked: true,
    selectedColor: 'black'
  }, {
    id: 3,
    type: 'plastic',
    amount: 300,
    action: 'collects',
    active: true,
    linked: true,
    selectedColor: 'beige'
  }]);

  async function fetchProducts() {
    const url = 'https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets';
    const resp = await fetch(url, {
      method: 'GET'
    });

    return await resp.json();
  }

  return {
    products,
    fetchProducts
  };
});
