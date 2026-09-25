import type { CollectionConfig, Field } from "payload";
import { handleField } from "./common";

export const Skus: CollectionConfig = {
	slug: "skus",
	labels: {
		plural: "SKUs",
		singular: "SKU",
	},
	fields: [
		handleField,
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
