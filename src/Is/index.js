/* @flow */

declare function is<A, B: A>(...args: [A, B]): $Call<
  & ((B) => true)
  & (() => false)
, A>
declare function is(): false

export type _Is = typeof is

export type Is<A, B> = $Call<_Is, A, B>
