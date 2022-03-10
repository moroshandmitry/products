import { createContext } from 'react';

export const CatalogContext = createContext({
	products: [],
	categories: [],
	prices: {},
	colors: [],
	limitOfProductsOnPage: 0,
	page: 0,
	setPage: () => {},
	selectedProductsFilter: [],
	setSelectedProductsFilter: () => {},
	selectedFilters: {
		colors: [],
		pricesRange: [],
	},
	setSelectedFilters: () => {},
});
export const CatalogProvider = CatalogContext.Provider;
