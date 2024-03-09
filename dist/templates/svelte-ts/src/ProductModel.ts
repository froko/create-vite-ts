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
    id: 'svelte',
    title: 'Svelte',
    url: 'https://svelte.dev/',
    description: 'Cybernetically Enhanced Web Apps',
    rating: 3
  }
];
