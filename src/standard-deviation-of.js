import {varianceOf} from './variance-of'

export function standardDeviationOf (array, callback) {
  let variance = varianceOf(array, callback)

  return variance ? Math.sqrt(variance) : false
}
