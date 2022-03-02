import Head from 'next/head';
import Image from 'next/image';
import header from '../public/header.jpg';
import { createContext, useState } from 'react';
import { productRequest } from '../components/utils/productRequest';
import { CatalogProvider } from '../components/Provider/Provider';
import { useCategoryGenerator } from '../components/hooks/useCategoryGenerator';
import { usePriceGenerator } from '../components/hooks/usePriceGenerator';
import { useColorsGenerator } from '../components/hooks/useColorsGenerator';
import { Catalog } from '../components/Catalog';

export async function getServerSideProps(ctx) {
	const products = await productRequest();
	return {
		props: {
			products,
		},
	};
}

function Home({ products }) {
	const categories = useCategoryGenerator(products);
	const prices = usePriceGenerator(products);
	const colors = useColorsGenerator(products);
	const limit = 12;
	const [page, setPage] = useState(0);

	const provider = {
		products, // [{ node: { name, node_locale, thumbnailImage, colorFamily, categoryTags, shopifyProductEu } } ... ],
		categories, // [ 'Sandals', 'Mid-Heels', 'New Arrivals' ... ]
		prices, // { max: 520, min: 0 }
		colors, // ['Green', 'White', 'Brown', 'Orange', 'Black', 'Natural']
		limit, // 12
		page, // 0
		setPage,
	};

	return (
		<div style={{ background: '#F8F5EE' }}>
			<Head title='Products filter' content='Product filter with pagination' />
			<main className='container mx-auto' style={{ maxWidth: '1440px' }}>
				<Image src={header} priority width='1440' height='553' alt='header' />

				<CatalogProvider value={provider}>
					<Catalog />
				</CatalogProvider>
			</main>
		</div>
	);
}

export default Home;
