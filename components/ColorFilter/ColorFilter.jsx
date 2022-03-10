import { useContext } from 'react';
import { CatalogContext } from '../../Provider';

export const ColorFilter = () => {
	const {
		colors,
		selectedProductsFilter,
		setSelectedProductsFilter,
		selectedFilters,
		setSelectedFilters,
	} = useContext(CatalogContext);

	const handleSelectOrRemoveColor = (productColor) => {
		const selectColorWithPriceRange =
			selectedProductsFilter &&
			selectedProductsFilter.filter((item) => {
				const {
					node: { colorFamily },
				} = item;

				if (colorFamily) {
					const [itemColor] = colorFamily;
					const { name: color } = itemColor;

					if (color === productColor) {
						return item;
					}
				}
			});
		setSelectedProductsFilter(selectColorWithPriceRange);

		setSelectedFilters((prevState) => ({
			colors: selectedFilters.colors.concat(productColor),
			pricesRange: prevState.pricesRange,
		}));

		if (selectedFilters.colors.indexOf(productColor) !== -1) {
			const removeSelectedColor = selectedFilters.colors.filter((item) => {
				if (item !== productColor) {
					return item;
				}
			});
			setSelectedFilters({ colors: removeSelectedColor });
		}
	};

	return (
		<ul className='flex flex-wrap'>
			{colors.map((color) => (
				<li key={color} className='px-2 py-2'>
					<label
						className='px-1 border rounded-full border-2 border-indigo-500'
						style={{ background: `${color}` }}
					>
						<input
							className='opacity-0'
							type='checkbox'
							name={color}
							value={color}
							onClick={() => handleSelectOrRemoveColor(color)}
						/>
					</label>
				</li>
			))}
		</ul>
	);
};
