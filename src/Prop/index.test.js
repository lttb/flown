/* @flow */

import type { Prop } from '..'

('test': Prop<{a: 'test'}, 'a'>)

;('test': Prop<{a: 'test'}, 'a'>)

/**
 * $ExpectError
 *
 * Cannot instantiate `Prop` because property `b` is missing in object type [1].
 */
;(null: Prop<{a: 'test'}, 'b'>)
