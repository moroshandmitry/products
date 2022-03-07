import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { CatalogProvider } from '../Provider';
import { productRequest } from '../utils/productRequest';
import {
	useCategoryGenerator,
	useColorsGenerator,
	usePriceGenerator,
} from '../hooks';
import { Catalog } from '../components';
import header from '../public/header.jpg';
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
	const [selectedProductsFilter, setSelectedProductsFilter] = useState(null);
	const [page, setPage] = useState(0);

	const provider = {
		products, // [{ node: { name, node_locale, thumbnailImage, colorFamily, categoryTags, shopifyProductEu } } ... ],
		categories, // [ 'Sandals', 'Mid-Heels', 'New Arrivals' ... ]
		prices, // { max: 520, min: 0 }
		colors, // ['Green', 'White', 'Brown', 'Orange', 'Black', 'Natural']
		limitOfProductsOnPage, // 12
		page, // 0
		setPage,
		selectedProductsFilter,
		setSelectedProductsFilter,
	};

	return (
		<>
			<Head>
				<title>Products filter</title>
				<meta name='description' content='Product filter with pagination' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
				<link rel='icon' href='/favicon.ico' />
				<meta name='robots' content='Products,filter' />
			</Head>

			<header>
				<Image src={header} priority responsive alt='header' />
			</header>

			<main>
				<CatalogProvider value={provider}>
					<Catalog />
				</CatalogProvider>
			</main>

			<footer className='py-5 bg-[#dcdcdc] text-center text-sm font-bold'>
				&copy; All rights reserved! {new Date().getFullYear()}
			</footer>
		</>
	);
}

export default Home;
