/* @flow */

export type Frozen<V> = $ReadOnly<FrozenMapper<V>>
type FrozenMapper<V> = $Exact<$ObjMap<V, InnerFrozen>>
export type InnerFrozen =
  & (<V: Object>(V) => $ReadOnly<FrozenMapper<V>>)
  & (<V: Array<any>>(V) => $TupleMap<V, InnerFrozen>)
  & (<V: $ReadOnlyArray<any>>(V) => $TupleMap<V, InnerFrozen>)
  & (<V>(V) => V)
