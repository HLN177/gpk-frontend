import type { Product } from '@/types/widget';
import type { Mock } from 'vitest';
import { getProductWidgets } from '@/api/service';
import { useWidgetStore } from '@/stores/widget.store';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const mockProducts: Product[] = [
  {
    id: 1,
    type: 'carbon',
    amount: 2,
    action: 'offsets',
    active: false,
    linked: false,
    selectedColor: 'green'
  },
  {
    id: 2,
    type: 'trees',
    amount: 15,
    action: 'plants',
    active: false,
    linked: true,
    selectedColor: 'black'
  },
  {
    id: 3,
    type: 'plastic',
    amount: 300,
    action: 'collects',
    active: true,
    linked: true,
    selectedColor: 'beige'
  }
];

vi.mock('@/api/service', () => ({
  getProductWidgets: vi.fn()
}));

describe('Widget Store', () => {
  let widgetStore: ReturnType<typeof useWidgetStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    widgetStore = useWidgetStore();
  });

  it('should initialize with an empty products array', () => {
    expect(widgetStore.products).toEqual([]);
  });

  it('should fetch and update products correctly', async () => {
    (getProductWidgets as Mock).mockResolvedValueOnce(mockProducts);

    await widgetStore.fetchProducts();

    expect(widgetStore.products).toEqual(mockProducts);
    expect(getProductWidgets).toHaveBeenCalledTimes(1);
  });

  it('should correctly update active status of a product', () => {
    widgetStore.products = mockProducts;

    widgetStore.updateActive(1, true);

    expect(widgetStore.products[0].active).toBe(true);
    expect(widgetStore.products[1].active).toBe(false);
  });

  it('should correctly update the linked status of a product', () => {
    widgetStore.products = mockProducts;

    widgetStore.updateLink(1, true);

    expect(widgetStore.products[0].linked).toBe(true);
  });

  it('should correctly update the selected color of a product', () => {
    widgetStore.products = mockProducts;

    widgetStore.updateColor(1, 'black');

    expect(widgetStore.products[0].selectedColor).toBe('black');
  });

  it('should not update if the product id does not exist', () => {
    widgetStore.products = [
      {
        id: 1,
        type: 'carbon',
        amount: 2,
        action: 'offsets',
        active: false,
        linked: false,
        selectedColor: 'green'
      }
    ];

    widgetStore.updateActive(2, true);
    widgetStore.updateLink(2, true);
    widgetStore.updateColor(2, 'black');

    expect(widgetStore.products[0].active).toBe(false);
    expect(widgetStore.products[0].linked).toBe(false);
    expect(widgetStore.products[0].selectedColor).toBe('green');
  });
});
