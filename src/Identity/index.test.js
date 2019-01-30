/* @flow */

import type { _Identity } from '..'

(true: $Call<_Identity, true>)

/**
 * $ExpectError
 */
;(false: $Call<_Identity, true>)

;(1: $Call<_Identity, number>)
;({ x: 1 }: $Call<_Identity, {x: 1}>)

/**
 * $ExpectError
 */
;('1': $Call<_Identity, {x: 1}>)
