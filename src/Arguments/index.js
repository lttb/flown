/* @flow */

/*
declare function arguments<A>((...args: [A]) => any): [A]
declare function arguments<A, B>((...args: [A, B]) => any): [A, B]
declare function arguments<A, B, C>((...args: [A, B, C]) => any): [A, B, C]
declare function arguments<A, B, C, D>((...args: [A, B, C, D]) => any): [A, B, C, D]
declare function arguments<A, B, C, D, E>((...args: [A, B, C, D, E]) => any): [A, B, C, D, E]
declare function arguments((...args: []) => any): []

export type Arguments<T> = $Call<typeof arguments, T>
*/

type _Arguments = <T>((...args: T) => any) => (T & T)

export type Arguments<F> = $Call<_Arguments, F>
