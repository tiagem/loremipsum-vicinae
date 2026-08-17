/// <reference types="@vicinae/api">

/*
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 */

type ExtensionPreferences = {
  /** Default Action - What happens when a no-view command runs, or when you press Enter in the preview. */
	"action": "paste" | "clipboard" | "pasteAndCopy";

	/** Classic Opening - Begin generated text with the classic Cicero opening instead of a random sentence. */
	"startWithLorem": boolean;
}

declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Command: Generate Lorem Ipsum */
	export type Generate = ExtensionPreferences & {
		
	}

	/** Command: Generate Paragraphs */
	export type Paragraphs = ExtensionPreferences & {
		
	}

	/** Command: Generate Sentences */
	export type Sentences = ExtensionPreferences & {
		
	}

	/** Command: Generate Words */
	export type Words = ExtensionPreferences & {
		
	}

	/** Command: Generate List */
	export type Lists = ExtensionPreferences & {
		
	}
}

declare namespace Arguments {
  /** Command: Generate Lorem Ipsum */
	export type Generate = {
		
	}

	/** Command: Generate Paragraphs */
	export type Paragraphs = {
		/** No. of paragraphs */
		"count": string
	}

	/** Command: Generate Sentences */
	export type Sentences = {
		/** No. of sentences */
		"count": string
	}

	/** Command: Generate Words */
	export type Words = {
		/** No. of words */
		"count": string
	}

	/** Command: Generate List */
	export type Lists = {
		/** No. of items */
		"count": string
	}
}