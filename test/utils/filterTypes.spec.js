import filterTypes, { options } from '../../src/utils/filterTypes.js'
import TYPES from '../../src/constants/types.js'

describe('filterTypes', () => {
  it('should find all types with empty input', () => {
    const filteredTypes = filterTypes(undefined, TYPES)

    expect(filteredTypes).toStrictEqual(TYPES)
  })

  it('should should find the `feat` type first', () => {
    const filteredTypes = filterTypes('feat', TYPES)

    const type = TYPES.find((t) => t.name === 'feat')

    expect(filteredTypes[0]).toStrictEqual(type)
  })

  it('should should find the `test` type first', () => {
    const filteredTypes = filterTypes('test', TYPES)

    const type = TYPES.find((t) => t.name === 'test')

    expect(filteredTypes[0]).toStrictEqual(type)
  })

  it('should match a list of filteredTypes', () => {
    const filteredTypes = filterTypes('feat', TYPES)

    expect(filteredTypes).toMatchSnapshot()
  })

  it('should not have a total weight of greater than 1', () => {
    const weightSum = options.keys.reduce(
      (carry, key) => (carry += key.weight),
      0
    )

    expect(weightSum).toBeLessThanOrEqual(1)
  })
})
