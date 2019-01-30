/* @flow */

import type { Apply } from '..'

declare function reduce<Fn, A, T, $>(Fn, A, T): $Call<
  Apply<
    $Compose,
    $TupleMap<T, Fn>,
    $,
  >
, A>

export type _Reduce = typeof reduce

export type Reduce<Fn, A, T> = $Call<_Reduce, Fn, A, T>
