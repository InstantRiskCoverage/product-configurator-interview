import type { Field, TextFieldSingleValidation } from "payload";

const handlePattern = /^[a-zA-Z0-9-]+$/;

const handleValidation: TextFieldSingleValidation = async (
	handle: string | null | undefined,
) => {
	if (handle === undefined || handle === null) return "Handle must be provided";
	if (handlePattern.exec(handle)) return true;
	return "Invalid characters in handle";
};

export const handleField: Field = {
	name: "handle",
	type: "text",
	unique: true,
	required: true,
	validate: handleValidation,
};

export const titleField: Field = {
	name: "title",
	type: "text",
	required: true,
};

export const generalStatusField: Field = {
	name: "status",
	type: "select",
	hasMany: false,
	options: ["draft", "active", "archived"],
	defaultValue: "active",
	required: true,
};
