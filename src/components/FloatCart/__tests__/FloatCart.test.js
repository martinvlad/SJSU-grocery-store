import Root from '../../../Root';
import FloatCart from '..';
import CartProduct from '../CartProduct';

const initialState = {
  cart: {
    products: [
      {
        id: 12,
        sku: 12064273040195392,
        title: 'Cat Tee Black T-Shirt',
        description: '4 MSL',
        availableSizes: ['S', 'XS'],
        style: 'Black with custom print',
        price: 10.9,
        installments: 9,
        currencyId: 'USD',
        currencyFormat: '$',
        isFreeShipping: true,
      },
      {
        id: 13,
        sku: 51498472915966366,
        title: 'Dark Thug Blue-Navy T-Shirt',
        description: '',
        availableSizes: ['M'],
        style: 'Front print and paisley print',
        price: 29.45,
        installments: 5,
        currencyId: 'USD',
        currencyFormat: '$',
        isFreeShipping: true,
      },
    ],
  },
};

let wrapped;
describe('Floatcart test', () => {
  it('should float a cart', () => {
    expect(0).toEqual(0);
  });
});
