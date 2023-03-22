const _isArray = Array.isArray

export function isArray(value: unknown): value is Array<unknown> {
  return _isArray(value)
}
