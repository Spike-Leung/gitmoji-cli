// @flow
import Fuse from 'fuse.js'

import { type Types } from "@constants/types"

export const options = {
  threshold: 0.5,
  keys: [
    {
      name: 'name',
      weight: 0.5
    },
    {
      name: 'description',
      weight: 0.5
    }
  ]
}

const filterTypes = (
  input: ?string,
  types: Array<Types>
): Function | Array<Object> => {
  const fuse = new Fuse(types, options)

  return input ? fuse.search(input).map((type) => type.item) : types
}

export default filterTypes
