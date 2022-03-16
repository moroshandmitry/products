import { useMemo } from 'react';

export const useCategoryGenerator = (products) =>
	useMemo(() => {
		const categories = [];

		if (products) {
			for (const product of products) {
				if (product?.node?.categoryTags) {
					categories.push(...product?.node?.categoryTags);
				}
			}
		}

		const uniqCategoriesArray = [...new Set(categories)];

		return uniqCategoriesArray;
	}, [products]);
