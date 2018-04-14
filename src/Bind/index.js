/* @flow */

declare function bind<T, X, A, B, C, D>(...args: [T, A]): (
  & (() => $Call<T, A>)
  & ((B) => $Call<T, A, B>)
  & ((B, C) => $Call<T, A, B, C>)
  & ((B, C, D) => $Call<T, A, B, C, D>)
)

declare function bind<T, X, A, B, C, D>(...args: [T, A, B]): (
  & (() => $Call<T, A, B>)
  & ((C) => $Call<T, A, B, C>)
  & ((C, D) => $Call<T, A, B, C, D>)
)

declare function bind<T, X, A, B, C, D>(...args: [T, A, B, C]): (
  & (() => $Call<T, A, B, C>)
  & ((D) => $Call<T, A, B, C, D>)
)

declare function bind<T, X, A, B, C, D>(...args: [T, A, B, C, D]): (
  & (() => $Call<T, A, B, C, D>)
)

export type Bind = typeof bind
