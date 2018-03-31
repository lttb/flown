/* @flow */

declare function arguments<A>((A) => any): [A]
declare function arguments<A, B>((A, B) => any): [A, B]
declare function arguments<A, B, C>((A, B, C) => any): [A, B, C]
declare function arguments<A, B, C, D>((A, B, C, D) => any): [A, B, C, D]
declare function arguments<A, B, C, D, E>((A, B, C, D, E) => any): [A, B, C, D, E]

export type Arguments<T> = $Call<typeof arguments, T>
