import { useContext } from 'react';
import { CatalogContext } from '../../Provider';

export const ColorFilter = () => {
	const {
		colors,
		setSelectedColors,
		selectedColors
	} = useContext(CatalogContext);

	const handleSelectOrRemoveColor = (productColor) => {
		const isColorExist = Boolean(selectedColors.find(item => item === productColor));

		setSelectedColors(isColorExist ? selectedColors.filter(item => item !== productColor) : [...selectedColors, productColor])
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
