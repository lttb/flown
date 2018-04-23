/* @flow */

opaque type None = empty


declare function bind<T, A, B, C, D, E>(...args: [T, None, None, None, None, None]): () => $Call<T>
declare function bind<T, A, B, C, D, E>(...args: [T, A, None, None, None, None]): (
  & ((...args: [B]) => $Call<T, A, B>)
  & ((...args: [B, C]) => $Call<T, A, B, C>)
  & ((...args: [B, C, D]) => $Call<T, A, B, C, D>)
  & ((...args: [B, C, D, E]) => $Call<T, A, B, C, D, E>)
  & ((...args: []) => $Call<T, A>)
  & (() => $Call<T, A>)
)
declare function bind<T, A, B, C, D, E>(...args: [T, A, B, None, None, None]): (
  & ((...args: [C]) => $Call<T, A, B, C>)
  & ((...args: [C, D]) => $Call<T, A, B, C, D>)
  & ((...args: [C, D, E]) => $Call<T, A, B, C, D, E>)
  & ((...args: []) => $Call<T, A, B>)
  & (() => $Call<T, A, B>)
)
declare function bind<T, A, B, C, D, E>(...args: [T, A, B, C, None, None]): (
  & ((...args: [D]) => $Call<T, A, B, C, D>)
  & ((...args: [D, E]) => $Call<T, A, B, C, D, E>)
  & ((...args: []) => $Call<T, A, B, C>)
  & (() => $Call<T, A, B, C>)
)
declare function bind<T, A, B, C, D, E>(...args: [T, A, B, C, D, None]): (
  & ((...args: [E]) => $Call<T, A, B, C, D, E>)
  & ((...args: []) => $Call<T, A, B, C, D>)
  & (() => $Call<T, A, B, C, D>)
)
declare function bind<T, A, B, C, D, E>(...args: [T, A, B, C, D, E]): (
  & (() => $Call<T, A, B, C, D, E>)
)
declare function bind<T, A, B, C, D, E>(...args: [T, A, B, C, D, E]): $Call<typeof bind, T, A, B, C, D, E>
declare function bind<T, A, B, C, D>(...args: [T, A, B, C, D]): $Call<typeof bind, T, A, B, C, D, None>
declare function bind<T, A, B, C>(...args: [T, A, B, C]): $Call<typeof bind, T, A, B, C, None, None>
declare function bind<T, A, B>(...args: [T, A, B]): $Call<typeof bind, T, A, B, None, None, None>
declare function bind<T, A>(...args: [T, A]): $Call<typeof bind, T, A, None, None, None>
declare function bind<T>(...args: [T]): $Call<typeof bind, T, None, None, None, None>


export type _Bind = typeof bind

export type Bind<T, A = None, B = None, C = None, D = None, E = None> = $Call<
  _Bind,
  T, A, B, C, D, E,
>
