/**
 * Converts literal \n characters in translated strings to actual newlines.
 * This is needed because JSON translation files use \\n (escaped), which
 * become literal \n strings in JavaScript. The tooltip preset already
 * includes whitespace-pre-line CSS to properly render newlines.
 *
 * @param text - The translated text that may contain literal \n characters
 * @returns The text with actual newline characters
 */
export function formatTooltip(text: string): string {
  return text.replace(/\\n/g, '\n')
}
