/* @flow */

import { type PropOr, propOr } from '..'

('test': PropOr<{ a: 'test' }, 'a', null>)
;(null: PropOr<{ a: 'test' }, 'b', null>)

;(null: PropOr<'x', 'b', null>)

/**
 * $ExpectError
 *
 * Cannot cast `'test2'` to `PropOr` because string [1] is incompatible with string literal `test` [2].
 */
;('test2': PropOr<{ a: 'test' }, 'a', null>)

/**
 * $ExpectError
 *
 * Cannot cast `'hey'` to `PropOr` because string [1] is incompatible with null [2].
 */
;('hey': PropOr<{ a: 'test' }, 'b', null>)

;(propOr({ a: 'test' }, 'a', null): 'test')
;(propOr({ a: 'test' }, 'b', null): null)
;(propOr(undefined, 'a', 'a'): 'a')
