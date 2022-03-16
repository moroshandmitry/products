import Image from 'next/image';
import { useContext } from 'react';
import { CatalogContext } from '../../Provider';
import { ProductCard } from '../../components';
import productNotFound from '../../public/product-not-found.png';

export const CatalogProducts = () => {
	const { page, limitOfProductsOnPage, selectedProductsFilter, selectedProducts } =
		useContext(CatalogContext);

	return (
		<div className='flex flex-wrap justify-around py-3'>
			{!selectedProducts?.length ? (
				<Image
					src={productNotFound}
					width='450'
					height='450'
					alt='product-not-found'
				/>
			) : (
				selectedProducts
					.map((product) => (
						<ProductCard product={product} key={product.node.name} />
					))
					.splice(page * limitOfProductsOnPage, limitOfProductsOnPage)
			)}
		</div>
	);
};
