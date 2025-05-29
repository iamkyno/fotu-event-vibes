
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  soldOut?: boolean;
  onSale?: boolean;
  salePrice?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'F.O.T.U Official T-Shirt',
    price: 350,
    image: '/uploads/white-shirt.webp',
    description: 'Premium cotton F.O.T.U branded t-shirt. Perfect for showing your support at events and making a statement.',
    onSale: true,
    salePrice: 280,
  },
  {
    id: '2',
    name: 'F.O.T.U Cap',
    price: 200,
    image: '/uploads/white-cap.webp',
    description: 'Stylish F.O.T.U embroidered cap designed for comfort and style. One size fits all perfectly.',
  },
  {
    id: '3',
    name: 'F.O.T.U Hoodie',
    price: 650,
    image: '/uploads/black-hoodie.webp',
    description: 'Comfortable and warm F.O.T.U hoodie made with premium materials for those chilly event nights.',
  },
  {
    id: '4',
    name: 'F.O.T.U Drink Tumbler',
    price: 150,
    image: '/uploads/fd46ff85-0945-4899-83b5-54c0ddd8f0fe.png',
    description: 'Official F.O.T.U branded tumbler with double-wall insulation to keep your drinks cool during all events.',
    soldOut: true,
  }
];
