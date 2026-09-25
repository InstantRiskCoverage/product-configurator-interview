import type { CollectionConfig } from "payload";
import { generalStatusField, handleField, titleField } from "./common";

export const Clients: CollectionConfig = {
	slug: "clients",
	admin: {
		useAsTitle: "legal_name",
	},
	fields: [
		generalStatusField,
		handleField,
		titleField,
		{
			name: "legal_name",
			label: "Legal Name of Client",
			type: "text",
			required: true,
		},
		{
			name: "legal_address",
			label: "Legal Address of Client",
			type: "text",
			required: true,
		},
	],
};
