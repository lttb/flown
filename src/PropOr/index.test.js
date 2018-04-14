/* @flow */

import type { PropOr } from './'

('test': PropOr<{ a: 'test' }, 'a', null>)
;(null: PropOr<{ a: 'test' }, 'b', null>)

/**
 * $ExpectError
 *
 * Cannot cast `'hey'` to `PropOr` because string [1] is incompatible with null [2].
 */
;('hey': PropOr<{ a: 'test' }, 'b', null>)
