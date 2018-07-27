import {isFloat} from './is-float'

describe('./is-float', () => {
  it('is a function', () => {
    expect(typeof isFloat).toBe('function')
  })

  it('is a float', () => {
    expect(isFloat(1.1)).toEqual(true)
  })

  it('is not a float', () => {
    expect(isFloat(1)).toEqual(false)
  })
})
