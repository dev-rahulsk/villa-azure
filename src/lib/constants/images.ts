/**
 * All villa photos are exported from the Claude Design project into a single
 * shared folder, keyed by their original filename, so any page can reference
 * the same source image without duplicating files.
 */
export function villaImage(filename: string) {
  return `/images/villa/${filename}`;
}
