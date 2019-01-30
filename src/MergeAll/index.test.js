/* @flow */


import type { MergeAll } from '..'

declare var x: MergeAll<[{a: 1}, {b: 1}, {c: 1}]>

;(x: { a: 1, b: 1, c: 1 })

/**
 * $ExpectError
 *
 * the type of 'c' is incompatible with number
 */
;(x: { a: 1, b: 1, c: '1' })
