import { useContext } from 'react';
import CatalogContext from './Provider/Provider';
import { ColorFilter } from './ColorFilter';
import { ProductCard } from './ProductCard';
import { Pagination } from '../components/Pagination';
import { RangeFilter } from './RangeFilter';

export const Catalog = () => {
	const { products, page, limit } = useContext(CatalogContext);

	return (
		<div className='overflow-x-hidden'>
			<ColorFilter />
			<RangeFilter />
			<div className='flex flex-wrap justify-around py-3'>
				{products
					.map((product) => (
						<ProductCard product={product} key={product.node.name} />
					))
					.splice(page * limit, limit)}
			</div>
			<Pagination />
		</div>
	);
};
