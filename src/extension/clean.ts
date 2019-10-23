import { identity, pickBy } from 'lodash-es'

export const clean = (o: {}) => pickBy(o, identity)
