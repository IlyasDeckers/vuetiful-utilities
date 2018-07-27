/* eslint-disable */
import {search} from './search'

describe('./varianceOf', () => {
  const arr = [
    {
      id: 1,
      name: 'john'
    },
    {
      id: 2,
      name: 'jane'
    },
    {
      id: 3,
      name: 'ilyas'
    }
  ]
  it('is a function', () => {
    expect(typeof search).toBe('function')
  })

  describe('Searches', () => {
    it('Finds an object in an array by the id', () => {
      expect(search(arr, 1)).toEqual([ { id: 1, name: 'john' } ])
    })

    it('Finds an object by a value', () => {
      expect(search(arr, 'john')).toEqual([ { id: 1, name: 'john' } ])
    })

    it('finds a value in an object', () => {
      expect(search({ id: 1, name: 'john' }, 1)).toEqual(true)
    })

    it('finds a value in a multidimensional object', () => {
      expect(search({ id: 1, data: { name: 'john' } }, 'john')).toEqual(true)
    })

    it('does not find the value', () => {
      expect(search({ id: 1, data: { name: 'john' } }, 'test')).toEqual(false)
    })

    it('Cannot be searched', () => {
      expect(search('string', 'test')).toEqual([])
    })
  })
})
