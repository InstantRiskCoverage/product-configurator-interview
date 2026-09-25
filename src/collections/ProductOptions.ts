import type { CollectionConfig } from "payload";
import { generalStatusField, handleField, titleField } from "./common";

export const ProductOptions: CollectionConfig = {
	slug: "productOptions",
	admin: {
		useAsTitle: "handle",
	},
	fields: [
		handleField,
		titleField,
		generalStatusField,
		{
			name: "product",
			type: "relationship",
			relationTo: "products",
			required: true,
		},
		{
			name: "values",
			type: "join",
			collection: "productOptionValues",
			on: "productOption",
		},
	],
};
