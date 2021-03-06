import Image from 'next/image';

export const ProductCard = ({ product }) => {
	const {
		node: {
			name,
			thumbnailImage: {
				file: { url },
			},
			shopifyProductEu: {
				variants: {
					edges: [
						{
							node: { price },
						},
					],
				},
			},
		},
	} = product;

	return (
		<div className='w-fit py-3 px-2'>
			<Image
				className='w-full'
				src={`https:${url}`}
				width='398'
				height='398'
				alt={name}
			/>
			<div className='flex justify-between'>
				<h2 className='text-sm font-bold'>{name}</h2>
				<div className='text-sm font-bold'>&euro;{price}</div>
			</div>
		</div>
	);
};
