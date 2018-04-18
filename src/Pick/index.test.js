/* @flow */

import type { Pick } from './index'

({ a: 1, b: 2, c: undefined }: Pick<{a: 1, b: 2, c: 3}, ['a', 'b']>)

;({ a: 1, b: undefined, c: 3 }: Pick<{a: 1, b: 2, c: 3}, ['a', 'c']>)

declare var hui: {...$Exact<$Diff<Pick<{a: 1, b: 2, c: 3}, ['b', 'c']>, {['a']: void}>>}

hui.b

declare var x: {...$Exact<Pick<{a: 1, b: 2, c: 3, d: 4}, ['a', 'c']>>}
declare var y: {...$Exact<Pick<{a: 1, b: 2, c: 3}, ['d']>>}

x.a
x.c
x.b
x.d

y.a
y.c
y.b
