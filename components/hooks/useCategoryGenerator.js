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

		const uniqCategories = new Set(categories);
		const uniqCategoriesArray = [...uniqCategories];

		return uniqCategoriesArray;
	}, [products]);
