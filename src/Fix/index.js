/* @flow */

import type { _Identity } from '../Identity'

export type _Fix = (
  & (<V: $ReadOnlyArray<any>>(V) => $TupleMap<V, _Identity>)
  & (<V: Array<any>>(V) => $TupleMap<V, _Identity>)
  & (<V: Object>(V) => $ObjMap<V, _Identity>)
  & (<V>(V) => V)
)

export type Fix<T> = $Call<_Fix, T>
