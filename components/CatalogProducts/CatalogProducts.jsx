import { useContext, useMemo } from 'react';
import { CatalogContext } from '../../Provider';
import { ProductCard } from '../../components';

export const CatalogProducts = () => {
	const { products, page, limitOfProductsOnPage } = useContext(CatalogContext);

	const memorizedProductsOnPage = useMemo(
		() =>
			products
				.map((product) => (
					<ProductCard product={product} key={product.node.name} />
				))
				.splice(page * limitOfProductsOnPage, limitOfProductsOnPage),
		[products, limitOfProductsOnPage, page]
	);

	return (
		<div className='flex flex-wrap justify-around py-3'>
			{memorizedProductsOnPage}
		</div>
	);
};
