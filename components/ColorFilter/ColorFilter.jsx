import { useContext } from 'react';
import { CatalogContext } from '../../Provider';

export const ColorFilter = () => {
	const { colors, selectedProductsFilter, setSelectedProductsFilter } =
		useContext(CatalogContext);

	const selectColor = (productColor) => {
		const selectColorWithPriceRange =
			selectedProductsFilter !== null &&
			selectedProductsFilter.filter((item) => {
				const {
					node: { colorFamily },
				} = item;

				if (colorFamily !== null) {
					const [itemColor] = colorFamily;
					const { name: color } = itemColor;

					if (color === productColor) {
						return item;
					}
				}
			});

		setSelectedProductsFilter(selectColorWithPriceRange);
	};

	return (
		<ul className='flex flex-wrap'>
			{colors.map((item) => (
				<li key={item} className='px-2 py-2' onClick={() => selectColor(item)}>
					<label
						className='px-1 border rounded-full border-2 border-indigo-500'
						style={{ background: `${item}` }}
					>
						<input
							className='opacity-0'
							type='checkbox'
							name={item}
							value={item}
						/>
					</label>
				</li>
			))}
		</ul>
	);
};
