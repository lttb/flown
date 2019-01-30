/* @flow */

import type { Apply } from '..'

declare function union<T, $>(T): $Call<
  Apply<
    $Compose,
    $TupleMap<T, <X, V>(V) => ((X) => (X | V))>,
    $,
  >,
  empty
>

export type _Union = typeof union
