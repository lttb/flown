/* @flow */

import type { _Reduce } from '../Reduce'

declare function mergeAll<A>(A): $Call<
  _Reduce,
  <X, V>(V) => X => { ...$Exact<X>, ...$Exact<V> },
  {},
  A
>

export type _MergeAll = typeof mergeAll

export type MergeAll<T> = $Call<_MergeAll, T>
