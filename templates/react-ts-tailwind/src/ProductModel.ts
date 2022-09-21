export interface Product {
  id: string;
  title: string;
  url: string;
  description: string;
  rating: number;
}

export const allProducts: Product[] = [
  { id: 'vite', title: 'Vite', url: 'https://vitejs.dev/', description: 'Next Generation Frontend Tooling', rating: 3 },
  {
    id: 'react',
    title: 'React',
    url: 'https://reactjs.org/',
    description: 'A JavaScript library for building user interfaces',
    rating: 3
  }
];
