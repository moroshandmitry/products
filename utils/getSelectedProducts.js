const productsFilters = {
    colors: (products, filter) => products.filter(item => item?.node?.colorFamily?.some(itemColor => Boolean(filter?.find(color => color === itemColor?.name)))),
    prices: (products, filter) => products.filter(item => item.node.shopifyProductEu.variants.edges.some(itemPrice => itemPrice.node.price >= filter[0] && itemPrice.node.price <= filter[1]))
}

const getSelectedProducts = (products, filters) => {
    let filteredProducts = products
    if (Object.values(filters).some(filter => filter?.length)) {
        Object.entries(filters).map(filter => {
            if (filter[1].length) {
                filteredProducts = productsFilters[filter[0]](filteredProducts, filter[1])
            }
        })
    }
    return filteredProducts;
}

export default getSelectedProducts;
