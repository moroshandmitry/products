import {
	ColorFilter,
	RangeFilter,
	CatalogProducts,
	Pagination,
} from '../../components';

export const Catalog = () => (
	<div className='overflow-x-hidden'>
		<ColorFilter />
		<RangeFilter />
		<CatalogProducts />
		<Pagination />
	</div>
);
