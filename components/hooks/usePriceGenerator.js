export const usePriceGenerator = (products) => {
	const prices = [];

	for (const product of products) {
		const {
			node: {
				shopifyProductEu: {
					variants: { edges },
				},
			},
		} = product;

		const [edge] = edges;

		const {
			node: { price },
		} = edge;

		prices.push(+price);
	}

	const min = Math.min(...prices);
	const max = Math.max(...prices);

	return {
		max,
		min,
	};
};
