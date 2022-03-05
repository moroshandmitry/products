import Head from 'next/head';
import Image from 'next/image';
import header from '../public/header.jpg';
import { useState } from 'react';
import { productRequest } from '../utils/productRequest';
import { CatalogProvider } from '../Provider/Provider';
import { useCategoryGenerator } from '../hooks/useCategoryGenerator';
import { usePriceGenerator } from '../hooks/usePriceGenerator';
import { useColorsGenerator } from '..//hooks/useColorsGenerator';
import { Catalog } from '../components/Catalog';
import { limitOfProductsOnPage } from '../config/constants';

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
	const [page, setPage] = useState(0);

	const provider = {
		products, // [{ node: { name, node_locale, thumbnailImage, colorFamily, categoryTags, shopifyProductEu } } ... ],
		categories, // [ 'Sandals', 'Mid-Heels', 'New Arrivals' ... ]
		prices, // { max: 520, min: 0 }
		colors, // ['Green', 'White', 'Brown', 'Orange', 'Black', 'Natural']
		limitOfProductsOnPage, // 12
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
