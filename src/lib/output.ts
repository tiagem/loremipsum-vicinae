import { Clipboard, closeMainWindow, getPreferenceValues, showToast, Toast } from "@vicinae/api";

export type ActionPreference = "clipboard" | "paste" | "pasteAndCopy";

export interface Preferences {
  action: ActionPreference;
  startWithLorem: boolean;
}

export function getPrefs(): Preferences {
  const raw = getPreferenceValues<ExtensionPreferences>();
  return {
    action: raw.action ?? "paste",
    startWithLorem: raw.startWithLorem ?? true,
  };
}

export async function produceOutput(content: string, action = getPrefs().action): Promise<void> {
  await closeMainWindow();

  switch (action) {
    case "paste":
      await Clipboard.paste(content);
      await showToast({ style: Toast.Style.Success, title: "Pasted" });
      break;
    case "pasteAndCopy":
      await Clipboard.paste(content);
      await Clipboard.copy(content);
      await showToast({ style: Toast.Style.Success, title: "Pasted and copied" });
      break;
    default:
      await Clipboard.copy(content);
      await showToast({ style: Toast.Style.Success, title: "Copied to clipboard" });
  }
}

export function actionLabel(action: ActionPreference): string {
  switch (action) {
    case "paste":
      return "Paste";
    case "pasteAndCopy":
      return "Paste and Copy";
    default:
      return "Copy to Clipboard";
  }
}
