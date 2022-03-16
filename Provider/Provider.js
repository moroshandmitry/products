import { createContext } from 'react';

export const CatalogContext = createContext({
	products: [],
	categories: [],
	prices: {},
	colors: [],
	limitOfProductsOnPage: 0,
	page: 0,
	setPage: () => {},
	selectedFilters: {
		colors: [],
		pricesRange: [],
	},
});
export const CatalogProvider = CatalogContext.Provider;
