import type { CollectionConfig } from "payload";

export const Skus: CollectionConfig = {
	slug: "skus",
	labels: {
		plural: "SKUs",
		singular: "SKU",
	},
	fields: [
		{
			name: "product",
			type: "relationship",
			relationTo: "products",
			hasMany: false,
			required: true,
		},
		{
			name: "productOptionValues",
			type: "relationship",
			relationTo: "productOptionValues",
			hasMany: true,
		},
	],
};
