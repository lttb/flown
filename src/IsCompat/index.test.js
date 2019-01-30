/* @flow */

import type { IsCompat } from '..'

(true: IsCompat<2, 2>)
;(false: IsCompat<2, 3>)

;(true: IsCompat<{+a: number}, {a: number}>)
;(true: IsCompat<{a: number}, {a: number}>)
;(true: IsCompat<{a: number}, {|a: number|}>)
;(true: IsCompat<{a: number}, {a: number, b?: number}>)
