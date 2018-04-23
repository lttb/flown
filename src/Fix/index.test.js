/* @flow */

import type { Fix } from './'

type F1 = <A, B>(A, B) => {|a: A, b: B|}
type F2 = <A, B>(A, B) => [A, B]
type F3 = <A>(A) => A

type T1 = Fix<$Call<F1, number, string>>
type T2 = Fix<$Call<F2, number, string>>
type T3 = Fix<$Call<F3, number>>

/**
 * $ExpectError
 */
;({ a: '0', b: '0' }: T1)

/**
 * $ExpectError
 */
;([0, 0]: T2)

/**
 * $ExpectError
 */
;('0': T3)

declare var x1: T1
declare var x2: T2
declare var x3: T3

/**
 * $ExpectError
 */
;(x1: { a: string, b: string })

/**
 * $ExpectError
 */
;(x2: [string, string])

/**
 * $ExpectError
 */
;(x3: '0')
