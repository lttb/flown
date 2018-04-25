/* @flow */

opaque type None = empty


declare function partial<T, A, B, C, D, E>(...args: [T, None, None, None, None, None]): () => $Call<T>
declare function partial<T, A, B, C, D, E>(...args: [T, A, None, None, None, None]): (
  & ((...args: [B]) => $Call<T, A, B>)
  & ((...args: [B, C]) => $Call<T, A, B, C>)
  & ((...args: [B, C, D]) => $Call<T, A, B, C, D>)
  & ((...args: [B, C, D, E]) => $Call<T, A, B, C, D, E>)
  & ((...args: []) => $Call<T, A>)
  & (() => $Call<T, A>)
)
declare function partial<T, A, B, C, D, E>(...args: [T, A, B, None, None, None]): (
  & ((...args: [C]) => $Call<T, A, B, C>)
  & ((...args: [C, D]) => $Call<T, A, B, C, D>)
  & ((...args: [C, D, E]) => $Call<T, A, B, C, D, E>)
  & ((...args: []) => $Call<T, A, B>)
  & (() => $Call<T, A, B>)
)
declare function partial<T, A, B, C, D, E>(...args: [T, A, B, C, None, None]): (
  & ((...args: [D]) => $Call<T, A, B, C, D>)
  & ((...args: [D, E]) => $Call<T, A, B, C, D, E>)
  & ((...args: []) => $Call<T, A, B, C>)
  & (() => $Call<T, A, B, C>)
)
declare function partial<T, A, B, C, D, E>(...args: [T, A, B, C, D, None]): (
  & ((...args: [E]) => $Call<T, A, B, C, D, E>)
  & ((...args: []) => $Call<T, A, B, C, D>)
  & (() => $Call<T, A, B, C, D>)
)
declare function partial<T, A, B, C, D, E>(...args: [T, A, B, C, D, E]): (
  & (() => $Call<T, A, B, C, D, E>)
)
declare function partial<T, A, B, C, D, E>(...args: [T, A, B, C, D, E]): $Call<typeof partial, T, A, B, C, D, E>
declare function partial<T, A, B, C, D>(...args: [T, A, B, C, D]): $Call<typeof partial, T, A, B, C, D, None>
declare function partial<T, A, B, C>(...args: [T, A, B, C]): $Call<typeof partial, T, A, B, C, None, None>
declare function partial<T, A, B>(...args: [T, A, B]): $Call<typeof partial, T, A, B, None, None, None>
declare function partial<T, A>(...args: [T, A]): $Call<typeof partial, T, A, None, None, None>
declare function partial<T>(...args: [T]): $Call<typeof partial, T, None, None, None, None>


export type _Partial = typeof partial

export type Partial<T, A = None, B = None, C = None, D = None, E = None> = $Call<
  _Partial,
  T, A, B, C, D, E,
>
