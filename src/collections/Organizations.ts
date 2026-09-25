import type { CollectionConfig } from "payload";
import { generalStatusField, handleField, titleField } from "./common";

export const Organizations: CollectionConfig = {
	slug: "organizations",
	admin: {
		useAsTitle: "title",
	},
	fields: [
		generalStatusField,
		handleField,
		titleField,
		{
			name: "client",
			label: "Client of Organization",
			type: "relationship",
			relationTo: "clients",
			required: true,
		},
		{
			name: "legal_name",
			label: "Legal Name of Organization",
			type: "text",
			required: true,
		},
		{
			name: "legal_address",
			label: "Legal Address of Organization",
			type: "text",
			required: true,
		},
	],
};
