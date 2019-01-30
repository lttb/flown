/* @flow */

import type { Pick } from '..'

({ a: 1, b: 2, c: undefined }: Pick<{a: 1, b: 2, c: 3}, ['a', 'b']>)

;({ a: 1, b: undefined, c: 3 }: Pick<{a: 1, b: 2, c: 3}, ['a', 'c']>)

/**
 * $ExpectError
 *
 * Cannot cast object literal to `Pick` because number [1] is incompatible with number literal `3` [2] in property `c`
 */
;({ a: 1, b: undefined, c: 4 }: Pick<{a: 1, b: 2, c: 3}, ['a', 'c']>)
