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
    id: 'typescript',
    title: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    description: 'JavaScript with syntax for types',
    rating: 3
  }
];
