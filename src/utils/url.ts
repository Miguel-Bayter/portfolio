/**
 * Validates that a URL uses a safe protocol (http: or https:).
 * Prevents javascript: URI injection in href attributes.
 *
 * @example
 * <a href={isSafeUrl(project.demo) ? project.demo : '#'}>Demo</a>
 */
export function isSafeUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Returns a safe href value, falling back to '#' for invalid URLs.
 */
export function safeHref(url: string | null | undefined): string {
  return isSafeUrl(url) ? url! : '#';
}
