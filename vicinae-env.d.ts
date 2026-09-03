/// <reference types="@vicinae/api">

/*
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 */

type ExtensionPreferences = {
  /** Default Action - What happens when a no-view command runs. In preview, Enter pastes; copy uses the generic copy keybind. */
	"action": "paste" | "clipboard" | "pasteAndCopy";

	/** Classic Opening - Begin generated text with the classic Cicero opening instead of a random sentence. */
	"startWithLorem": boolean;

	/** List Style - Marker used for generated lists in preview and the list command. */
	"listStyle": "dash" | "numbered" | "html";

	/** HTML Wrap - Element used to wrap each generated HTML paragraph. */
	"htmlTag": "p" | "div";
}

declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Command: Generate Lorem Ipsum */
	export type Generate = ExtensionPreferences & {
		
	}

	/** Command: Generate Paragraphs */
	export type Paragraphs = ExtensionPreferences & {
		/** Default Count - How many paragraphs to generate when you omit the count. */
		"defaultCount": string;
	}

	/** Command: Generate Sentences */
	export type Sentences = ExtensionPreferences & {
		/** Default Count - How many sentences to generate when you omit the count. */
		"defaultCount": string;
	}

	/** Command: Generate Words */
	export type Words = ExtensionPreferences & {
		/** Default Count - How many words to generate when you omit the count. */
		"defaultCount": string;
	}

	/** Command: Generate List */
	export type Lists = ExtensionPreferences & {
		/** Default Count - How many list items to generate when you omit the count. */
		"defaultCount": string;
	}

	/** Command: Generate HTML */
	export type Html = ExtensionPreferences & {
		/** Default Count - How many HTML paragraphs to generate when you omit the count. */
		"defaultCount": string;
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

	/** Command: Generate HTML */
	export type Html = {
		/** No. of paragraphs */
		"count": string
	}
}