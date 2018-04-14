/* @flow */

import type { Pure } from './'

const getX = (data: {x: number}): * => data.x
const get = (data: ?string): * => data
const get2 = (data: {x: number}, data2: {y: number}): * => null
const get3 = (data: {x: number}, data2: {y: number}, data3: {z: string}): * => null

declare var _getX: Pure<typeof getX>
declare var _get: Pure<typeof get>
declare var _get2: Pure<typeof get2>
declare var _get3: Pure<typeof get3>

declare var data: $ReadOnly<{x: 1}>

;(getX: Pure<typeof getX>)(data)
;(getX: Pure<typeof getX>)({ y: 1 }) // error

const x: string = _getX(data) // error
_getX(data)
_getX({ x: 1 })
_getX({ x: 2 })
_getX({ y: 2 }) // error
_getX({ x: 'x' }) // error
_getX('x') // error

_get('x')
_get('y')
_get('z')
_get()
_get(2) // error

_get2(data, { y: 1 })
_get2(data, { y: 1 })
_get2({ x: 1 }, { y: 1 })
_get2(data, { x: 1 }) // error
_get2({ x: 1 }, { y: 'x' }) // error
_get2({ x: 1 }, 'x') // error

_get3(data, { y: 'x' }, { z: 'z' }) // error
_get3(data, { y: 2 }, { z: 2 }) // error
