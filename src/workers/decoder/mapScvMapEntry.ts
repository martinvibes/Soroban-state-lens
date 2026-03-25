/**
 * Maps a single ScvMap key/value entry into a [string, unknown] tuple
 * suitable for use with Object.fromEntries.
 *
 * @param entry - Object with `key` and `val` fields
 * @param normalize - Function to normalize the value
 * @returns A tuple of [stringifiedKey, normalizedValue]
 */
export function mapScvMapEntry(
  entry: { key: unknown; val: unknown },
  normalize: (item: unknown) => unknown,
): [string, unknown] {
  let key: string
  try {
    const serialized = JSON.stringify(entry.key)
    key = typeof serialized === 'string' ? serialized : '__invalid_key'
  } catch {
    key = '__invalid_key'
  }

  return [key, normalize(entry.val)]
}
