/* @flow */

import type { Omit } from './index'

({ d: 4 }: Omit<{a: 1, b: 2, c: 3, d: 4}, ['a', 'b']>)
