/* @flow */

import { type PathOr, pathOr } from './'

('c': PathOr<{a: {b: 'c'}}, ['a', 'b'], null>)
;('y': PathOr<{ x: {y: 'y'} }, ['x', 'y'], null>)

;(null: PathOr<{a: {b: 'c'}}, ['a', 'b', 'c'], null>)
;({ b: 'c' }: PathOr<{a: {b: 'c'}}, ['a'], null>)

/**
 * $ExpectError
 */
;('c2': PathOr<{a: {b: 'c'}}, ['a', 'b'], null>)

;('c': PathOr<{a: {b: 'c'}}, ['a', 'b'], null>)
;('c': PathOr<{a: {b: {c: 'c'}}}, ['a', 'b', 'c'], null>)

/**
 * $ExpectError
 */
;('heh2': PathOr<{ hey: { hoh: { heh: 'heh' } } }, ['hey', 'hoh', 'heh'], null>)

;(pathOr({ hey: { hoh: 'hoh' } }, ['hey'], null): {hoh: 'hoh'})
;(pathOr({ hey: { hoh: 'hoh' } }, ['hey', 'hoh2'], null): null)
;(pathOr({ hey: { hoh: 'hoh' } }, ['hey', 'hoh'], null): 'hoh')
;(pathOr({ hey: { hoh: 'hoh' } }, ['hey'], null): {hoh: 'hoh'})

/**
 * $ExpectError
 */
;(pathOr({ hey: { hoh: 'hoh' } }, ['hey', 'hoh'], null): 'hoh2')

;(pathOr({ hey: { hoh: 'hoh' } }, ['hey', 'hoh'], null): 'hoh')
;(pathOr({ hey: { hoh: { heh: 'heh' } } }, ['hey', 'hoh', 'hah'], null): null)

/**
 * $ExpectError
 */
;(pathOr({ hey: { hoh: { heh: 'heh' } } }, ['hey', 'hoh', 'heh'], null): 'heh2')

;(pathOr({ hey: { hoh: { heh: 'heh' } } }, ['hey', 'hoh', 'heh'], null): 'heh')
