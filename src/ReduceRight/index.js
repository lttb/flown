/* @flow */

import type { Apply } from '..'

declare function reduceRight<Fn, A, T, $>(Fn, A, T): $Call<
  Apply<
    $Compose,
    $TupleMap<T, Fn>,
    $,
  >
, A>

export type _ReduceRight = typeof reduceRight

export type ReduceRight<Fn, A, T> = $Call<_ReduceRight, Fn, A, T>
