import {isInteger} from './is-integer'

describe('./is-integer', () => {
  it('is a function', () => {
    expect(typeof isInteger).toBe('function')
  })

  it('is an integer', () => {
    expect(isInteger(1)).toEqual(true)
  })

  it('is not an integer', () => {
    expect(isInteger(1.1)).toEqual(false)
  })

  it('is not a number', () => {
    expect(isInteger('test')).toEqual(false)
  })
})