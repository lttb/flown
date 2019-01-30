/* @flow */

import type { Is } from '..'

(true: Is<2, 2>)

;(false: Is<2, 3>)

;(true: Is<{a: number}, {a: number}>)

;(false: Is<{+a: number}, {a: number}>)
;(false: Is<{a: number}, {|a: number|}>)
;(false: Is<{a: number}, {a: number, b?: number}>)
