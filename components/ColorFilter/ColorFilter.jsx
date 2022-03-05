import { useContext, useMemo } from 'react';
import { CatalogContext } from '../../Provider';

export const ColorFilter = () => {
	const { colors } = useContext(CatalogContext);

	const memorizedColors = useMemo(
		() =>
			colors.map((item) => (
				<li key={item} className='px-2 pb-2'>
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
			)),
		[colors]
	);

	return (
		<div className='px-2 pt-2'>
			<ul className='flex flex-wrap'>{memorizedColors}</ul>
		</div>
	);
};
