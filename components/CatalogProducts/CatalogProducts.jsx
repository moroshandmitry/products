import { useContext, useMemo, useEffect } from 'react';
import { CatalogContext } from '../../Provider';
import { ProductCard } from '../../components';

export const CatalogProducts = () => {
	const { page, limitOfProductsOnPage, selectedProductsFilter } =
		useContext(CatalogContext);

	return (
		<div className='flex flex-wrap justify-around py-3'>
			{selectedProductsFilter !== null &&
				selectedProductsFilter
					.map((product) => (
						<ProductCard product={product} key={product.node.name} />
					))
					.splice(page * limitOfProductsOnPage, limitOfProductsOnPage)}
		</div>
	);
};
