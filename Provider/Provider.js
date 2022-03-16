import { createContext } from 'react';

export const CatalogContext = createContext({
	products: [],
	selectedProducts: [],
	setSelectedProducts: () => {},
	categories: [],
	prices: [],
	selectedPrices: [],
	setSelectedPrices: () => {},
	colors: [],
	selectedColors: [],
	setSelectedColors: () => {},
	limitOfProductsOnPage: 0,
	page: 0,
	setPage: () => {},
	selectedFilters: {
		colors: [],
		pricesRange: [],
	},
});

export const CatalogProvider = CatalogContext.Provider;
