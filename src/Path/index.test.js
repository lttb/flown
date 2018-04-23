/* @flow */

import { type Path } from './'

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
 * hoh2 is incmpatible with 'hoh'
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
 * heh2 is incmpatible with 'heh'
 */
;('heh2': Path<{ hey: { hoh: { heh: 'heh' } } }, ['hey', 'hoh', 'heh']>)

;('heh': Path<{ hey: { hoh: { heh: 'heh' } } }, ['hey', 'hoh', 'heh']>)
