/* @flow */

import type { Reduce } from '..'

type MergeAll<T> = Reduce<<X, V>(V) => X => { ...$Exact<X>, ...$Exact<V> }, {}, T>

declare function mergeAll<A>(A): MergeAll<A>

const x = mergeAll([{ a: 1 }, { b: 1 }, { c: 1 }, { a: 2 }])

;(x: { a: 2, b: 1, c: 1 })

/**
 * $ExpectError
 *
 * the type of 'c' is incompatible with number
 */
;(x: { a: 2, b: 1, c: '1' })
