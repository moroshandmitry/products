import { ColorFilter } from '../ColorFilter';
import { RangeFilter } from '../RangeFilter';
import { CatalogProducts } from '../CatalogProducts';
import { Pagination } from '../Pagination';

export const Catalog = () => (
	<div className='overflow-x-hidden'>
		<ColorFilter />
		<RangeFilter />
		<CatalogProducts />
		<Pagination />
	</div>
);
