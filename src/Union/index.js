/* @flow */

import type { Apply } from '../Apply'

declare function union<T, $>(T): $Call<
  Apply<
    $ComposeReverse,
    $TupleMap<T, <X, V>(V) => ((X) => (X | V))>,
    $,
  >,
  empty
>

export type _Union = typeof union
