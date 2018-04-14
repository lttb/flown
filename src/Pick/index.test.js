/* @flow */

import type { Pick } from './index'

({ a: 1, b: 2 }: Pick<{a: 1, b: 2, c: 3}, ['a', 'b']>)

;({ a: 1, b: 2 }: Pick<{a: 1, b: 2, c: 3}, ['a', 'b']>)

;({ a: 1, b: 3 }: Pick<{a: 1, b: 2, c: 3}, ['a', 'b']>)
