/* @flow */

import type { Return } from '..'

declare var fn: () => 'hey'

;('hey': Return<typeof fn>)

/**
 * $ExpectError
 * Cannot cast `'x'` to `Return` because string [1] is incompatible with string literal `hey` [2].
 */
;('x': Return<typeof fn>)

/**
 * $ExpectError
 *
 * Cannot cast `0` to `Return` because number [1] is incompatible with string [2].
 */
;(0: Return<typeof fn>)
