import type { CollectionConfig } from "payload";
import { generalStatusField, handleField, titleField } from "./common";

export const ProductOptionValues: CollectionConfig = {
	slug: "productOptionValues",
	admin: {
		useAsTitle: "title",
	},
	fields: [
		titleField,
		generalStatusField,
		handleField,
		{
			name: "productOption",
			type: "relationship",
			relationTo: "productOptions",
			required: true,
		},
		{
			name: "skus",
			type: "join",
			collection: "skus",
			on: "productOptionValues",
		},
	],
};
