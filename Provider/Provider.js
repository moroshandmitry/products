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
});
export const CatalogProvider = CatalogContext.Provider;
