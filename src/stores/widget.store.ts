import type { ColorType, Product } from '@/types/widget';
import { getProductWidgets } from '@/api/service';
import { defineStore } from 'pinia';

/**
 * This Pinia store manages the state for product widgets, including their active status,
 * linked status, selected color, and other properties.
 */
export const useWidgetStore = defineStore('widgetStore', () => {
  // State: Array of product widgets
  const products = ref<Product[]>([]);

  /**
   * Fetches product widget data from the API and updates the `products` state.
   * The data is expected to be an array of `Product` objects.
   */
  async function fetchProducts() {
    const result = await getProductWidgets();
    products.value = result || []; // Update state with API response or an empty array
  }

  /**
   * Updates the `active` status of a product widget by its ID.
   * If the `isActive` parameter is true, it ensures that all other widgets are set to inactive.
   * @param id - The ID of the product widget to update
   * @param isActive - The new active status for the widget
   */
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

  /**
   * Updates the `linked` status of a product widget by its ID.
   *
   * @param id - The ID of the product widget to update
   * @param isLink - The new linked status for the widget
   */
  function updateLink(id: number, isLink: boolean) {
    const product = products.value.find(p => p.id === id);
    if (product) {
      product.linked = isLink;
    }
  }

  /**
   * Updates the `selectedColor` of a product widget by its ID.
   *
   * @param id - The ID of the product widget to update
   * @param color - The new color to assign to the widget
   */
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
