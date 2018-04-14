/* @flow */

declare function arguments<
  _A,
>(<A>(...args: [A & _A]) => any): [
  $ReadOnly<_A>
]

declare function arguments<
    _A, _B,
>(<A: _A, B: _B>(...args: [A, B]) => any): ([
  $ReadOnly<_A>,
  $ReadOnly<_B>
])

declare function arguments<
    _A, _B, _C,
>(<A: _A, B: _B, C: _C>(...args: [A, B, C]) => any): ([
  $ReadOnly<_A>,
  $ReadOnly<_B>,
  $ReadOnly<_C>
])

const getX = (data: {x: number}) => data.x
const get = (data: ?string) => data
const get2 = (data: {x: number}, data2: {y: number}) => null
const get3 = (data: {x: number}, data2: {y: number}, data3: {z: string}) => null
const get4 = (data: {x: number}, data2: {x: number}, data3: {z: string}, data4: {x: number}) => null

declare function pure<V>(V): (((...args: $Call<typeof arguments, V>) => *) & V)

type Pure<T> = $Call<typeof pure, T>

declare var _getX: Pure<typeof getX>
declare var _get: Pure<typeof get>
declare var _get2: Pure<typeof get2>
declare var _get3: Pure<typeof get3>
declare var _get4: Pure<typeof get4>

declare var data: $ReadOnly<{x: 1}>

_getX(data)
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

_get3(data, {y: 1}, {z: 'x'})
_get3(data, {y: 1}, {z: 'x'})
_get3(data, {y: 1}, {z: 1}) // error
_get3(data, {y: 1}, 'test') // error
