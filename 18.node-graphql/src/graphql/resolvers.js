const products = require("../data/products");

const reslovers = {
	Query: {
		products: () => products,
		product: (_, { id }) => products.find((item) => Number(id) === item.id),
	},
	Mutation: {
		createProduct: (_, { title, category, price, inStock }) => {
			const newProduct = {
				title,
				category,
				price,
				inStock,
				id: products.length + 1,
			};
			products.push(newProduct);

			return newProduct;
		},
	},
};

module.exports = reslovers;
