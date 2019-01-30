/* @flow */

import { type Path } from '..'

/**
 * $ExpectError
 *
 * There is no 'hah' in {hoh: 'hoh'}
 */
(null: Path<{hey: {hoh: 'hoh'}}, ['hey', 'hoh', 'hah']>)

;('hoh': Path<{hey: {hoh: 'hoh'}}, ['hey', 'hoh']>)
;({ hoh: 'hoh' }: Path<{hey: {hoh: 'hoh'}}, ['hey']>)

/**
 * $ExpectError
 *
 * hoh2 is incompatible with 'hoh'
 */
;('hoh2': Path<{hey: {hoh: 'hoh'}}, ['hey', 'hoh']>)

;('hoh': Path<{hey: {hoh: 'hoh'}}, ['hey', 'hoh']>)

/**
 * $ExpectError
 *
 * There is no 'hah' in {hoh: 'hoh'}
 */
;(null: Path<{hey: {hoh: {heh: 'heh'}}}, ['hey', 'hoh', 'hah']>)

/**
 * $ExpectError
 *
 * heh2 is incompatible with 'heh'
 */
;('heh2': Path<{ hey: { hoh: { heh: 'heh' } } }, ['hey', 'hoh', 'heh']>)

;('heh': Path<{ hey: { hoh: { heh: 'heh' } } }, ['hey', 'hoh', 'heh']>)

/**
 * Should work with multiple calls by one object
 */
type obj = {hey: 123, hoh: 'wow'};

(123: Path<obj, ['hey']>)
;('wow': Path<obj, ['hoh']>)


/**
 * $ExpectError
 * Zero is incompatible with 123
 */
;(0: Path<obj, ['hey']>)
/**
 * $ExpectError
 * 'abc' is incompatible with 'wow'
 */
;('abc': Path<obj, ['hoh']>)
