// app/products/category/[category]/page.tsx

import Products from '@/components/Products'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

const validCategories = [
  'ceramics',
  'chairs',
  'tables',
  'pots',
  'lamps',
  'crockery',
  'sofas',
  'beds',
  'storage',
  'seating',
  'plant pots',
] as const;
type Category = typeof validCategories[number];

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params;

  if (!validCategories.includes(category as Category)) {
    notFound()
  }

  const apiEndpoint = `/api/category?category=${category}&search=*`
  return (
    <Products 
      pageHeader={category.charAt(0).toUpperCase() + category.slice(1)}
      apiEndpoint={apiEndpoint}
    />
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params;

  if (!category) {
    return {
      title: "Category Not Found | Modern Furniture Pacific",
    };
  }

  const title = category.charAt(0).toUpperCase() + category.slice(1);
    
  return {
    title: `${title} | Modern Furniture Pacific`,
  };
}