/* @flow */

import type { Apply } from './'

declare function union<A, $>(...args: A): $Call<
  Apply<
    $ComposeReverse,
    $TupleMap<A, <X, V>(V) => ((X) => (X | V))>,
    $,
  >,
  empty
>

declare var a: number
declare var b: string
declare var c: boolean

const x = union(a, b, c)

const y = union(a, b)

;(x: number | string | boolean)

;(y: number | string)

/**
 * $ExpectError
 */
;(x: number | boolean)
