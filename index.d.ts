interface RNFileViewerOptions {
  displayName?: string;
  showAppsSuggestions?: boolean;
  showOpenWithDialog?: boolean;
  onSend?(): any;
  onDismiss?(): any;
}

declare function open(
  path: string,
  options?: RNFileViewerOptions | string
): Promise<void>;

declare namespace _default {
  export { open };
}

export default _default;
