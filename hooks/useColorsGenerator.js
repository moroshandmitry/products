import { useMemo } from 'react';

export const useColorsGenerator = (products) =>
	useMemo(() => {
		const colors = [];

		for (const product of products) {
			const {
				node: { colorFamily },
			} = product;

			if (colorFamily) {
				const [colorName] = colorFamily;

				const { name: color } = colorName;

				colors.push(color);
			}
		}

		const uniqColorsArray = [...new Set(colors)];

		return uniqColorsArray;
	}, [products]);
