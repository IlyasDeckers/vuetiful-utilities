import { totalOf } from './total-of'

export function averageOf (array, callback) {
  let value = totalOf(array, callback)

  return value ? value / array.length : false
}
