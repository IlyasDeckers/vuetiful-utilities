
export function lastOf (array) {
  if (!array.length || array.length < 1) {
    return
  }

  return array[array.length - 1]
}
