/* @flow */

declare function arguments<
  A,
  X: (...args: [A]) => any,
  V: <B: Object>(...args: [B]) => any
>(V & X): [$ReadOnly<A>]

export type Arguments<T> = $Call<typeof arguments, T>

declare function pure<V>(V): (V & (...args: Arguments<V>) => void)

type Pure<T> = $Call<typeof pure, T>

const getX = (data: {x: number}) => data.x
const get = (data: string) => data

declare var _getX: Pure<typeof getX>
declare var _get: Pure<typeof get>

declare var data: $ReadOnly<{x: 1}>

_getX(data)
_getX({ x: 1 })
_getX({ x: 2 })
_getX({ x: 'x' }) // error
_getX('x') // error

_get('x')
_get('y')
_get('z')
_get(2) // error
