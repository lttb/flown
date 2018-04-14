/* @flow */

declare function returnType<R>((...args: any) => R): R

export type ReturnType<T> = $Call<typeof returnType, T>

declare function args1<A: Object>((...args: [A]) => any): [$ReadOnly<A> & $Shape<A>]
declare function args2<A>((...args: [A]) => any): [A]

declare function arguments<V: (...args: [Object]) => any>(V): $Call<typeof args1, V>
declare function arguments<V: (...args: any) => any>(V): $Call<typeof args2, V>

export type Arguments<T> = $Call<typeof arguments, T>

const getX = (data: {x: number}) => data.x
const get = (data: string) => data

type Heh = $Call<typeof arguments, typeof getX>

type Pure<T> = (...args: $Call<typeof arguments, T>) => void

declare function pure<V: (...args: [Object]) => any>(V): (...args: $Call<typeof args1, V>) => void
declare function pure<V: (...args: any) => any>(V): (...args: $Call<typeof args2, V>) => void

declare var data: $ReadOnly<{x: 1}>

declare var _getX: $Call<typeof pure, typeof getX>
declare var _get: $Call<typeof pure, typeof get>

// ;([data]: Heh)
// ;([{x: 'x'}]: Heh) // error

_getX(data)
_getX({ x: 1 })
_getX({ x: 'x' }) // error
_getX('x') // error

_get('x')
_get('y')
_get('z')
_get(2) // error
