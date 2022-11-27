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
    id: 'vue',
    title: 'Vue.js',
    url: 'https://vuejs.org/',
    description: 'The Progressive JavaScript Framework',
    rating: 3
  }
];
