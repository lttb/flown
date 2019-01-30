/* @flow */

import type { _Union } from '..'

declare var x: $Call<_Union, [string, number, boolean]>
;(x: string | number | boolean)

/**
 * $ExpectError
 */
;(x: string)

declare var y: $Call<_Union, [string, boolean]>
;(y: string | boolean)

/**
 * $ExpectError
 */
;(y: boolean)
