/* @flow */

import type { ReduceRight } from '..'

type MergeAllRight<T> = ReduceRight<<X, V>(V) => X => { ...$Exact<X>, ...$Exact<V> }, {}, T>

declare function mergeAllRight<A>(A): MergeAllRight<A>

const x = mergeAllRight([{ a: 1 }, { b: 1 }, { c: 1 }, { a: 2 }])

;(x: { a: 1, b: 1, c: 1 })

/**
 * $ExpectError
 *
 * the type of 'c' is incompatible with number
 */
;(x: { a: 1, b: 1, c: '1' })
