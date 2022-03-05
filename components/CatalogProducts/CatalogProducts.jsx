import { useContext } from 'react';
import { CatalogContext } from '../../Provider';
import { ProductCard } from '../../components';

export const CatalogProducts = () => {
	const { products, page, limitOfProductsOnPage } = useContext(CatalogContext);

	return (
		<div className='flex flex-wrap justify-around py-3'>
			{products
				.map((product) => (
					<ProductCard product={product} key={product.node.name} />
				))
				.splice(page * limitOfProductsOnPage, limitOfProductsOnPage)}
		</div>
	);
};
