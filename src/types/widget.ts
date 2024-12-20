export type ProductType = 'carbon' | 'plastic' | 'trees';

export type ActionType = 'collects' | 'plants' | 'offsets';

export type ColorType = 'white' | 'black' | 'blue' | 'green' | 'beige';

export type Color = string;

export interface Product {
  id: number
  type: ProductType
  amount: number
  action: ActionType
  active: boolean
  linked: boolean
  selectedColor: ColorType
}
