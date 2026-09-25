import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
	slug: "users",
	admin: {
		useAsTitle: "email",
	},
	auth: {
		useAPIKey: {
			reveal: true,
		},
		useSessions: true,
	},
	fields: [
		// Email added by default
		// Add more fields as needed
	],
};
