import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PAGE_TYPES, PageType } from '@/types/product';
import MenuLinks from '@/components/MenuLinks';

export async function generateMetadata({
  params,
}: {
  params: { type: string };
}): Promise<Metadata> {
  // Await params before accessing type
  const { type } = await params;
  const pageType = type as PageType;
  
  if (!PAGE_TYPES[pageType]) {
    return {
      title: 'Not Found | Modern Furniture Pacific'
    };
  }

  return {
    title: `${PAGE_TYPES[pageType].title} | Modern Furniture Pacific`,
  };
}

export function generateStaticParams() {
  return Object.keys(PAGE_TYPES).map((type) => ({
    type,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { type: string };
}) {
  // Await params before accessing type
  const { type } = await params;
  const pageType = type as PageType;

  if (!PAGE_TYPES[pageType]) {
    notFound();
  }

  const { title, apiEndpoint } = PAGE_TYPES[pageType];

  return (
    <MenuLinks 
      pageHeader={title} 
      apiEndpoint={apiEndpoint} 
    />
  );
}