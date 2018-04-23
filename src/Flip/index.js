/* @flow */

export type Flip<T> = (
  & (<A, B, C, D, E>(...args: [A, B, C, D, E]) => $Call<T, E, D, C, B, A>)
  & (<A, B, C, D>(...args: [A, B, C, D]) => $Call<T, D, C, B, A>)
  & (<A, B, C>(...args: [A, B, C]) => $Call<T, C, B, A>)
  & (<A, B>(...args: [A, B]) => $Call<T, B, A>)
  & (<A>(...args: [A]) => $Call<T, A>)
)

export type _Flip = <T>(T) => Flip<T>
