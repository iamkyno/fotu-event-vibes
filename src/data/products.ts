
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
    image: '/lovable-uploads/3c4d7105-4957-413f-afe9-d3803057dd4d.png',
    description: 'Premium cotton F.O.T.U branded t-shirt. Perfect for showing your support at events.',
    onSale: true,
    salePrice: 280,
  },
  {
    id: '2',
    name: 'F.O.T.U Cap',
    price: 200,
    image: '/lovable-uploads/b398b06d-500d-4e2e-bab2-a1f4ed0e96e9.png',
    description: 'Stylish F.O.T.U embroidered cap. One size fits all.',
  },
  {
    id: '3',
    name: 'F.O.T.U Hoodie',
    price: 650,
    image: '/lovable-uploads/5b229133-3069-4d1e-968b-02f2dce6df72.png',
    description: 'Comfortable and warm F.O.T.U hoodie. Perfect for those chilly event nights.',
  },
  {
    id: '4',
    name: 'F.O.T.U Drink Tumbler',
    price: 150,
    image: '/lovable-uploads/fd46ff85-0945-4899-83b5-54c0ddd8f0fe.png',
    description: 'Official F.O.T.U branded tumbler. Keep your drinks cool during events.',
    soldOut: true,
  },
  {
    id: '5',
    name: 'F.O.T.U Vinyl Sticker Pack',
    price: 80,
    image: '/lovable-uploads/f0023067-1732-4a5b-9016-a7b3d00e94e1.png',
    description: 'Set of 5 waterproof F.O.T.U stickers. Perfect for laptops, phones, and more.',
    onSale: true,
    salePrice: 60,
  },
  {
    id: '6',
    name: 'F.O.T.U Tote Bag',
    price: 250,
    image: '/lovable-uploads/c44b8635-f9e8-4729-bc63-dfaadcfd0e0c.png',
    description: 'Eco-friendly F.O.T.U tote bag. Great for carrying your event essentials.',
  },
];
