/* @flow */

export type _Arguments =
  & (<V>((...args: V) => any) => (V & V))
  /**
   * Locating errors right
   */
  & (<A, V: [A]>((...args: V) => any) => ([A]))
  & (<A, B, V: [A, B]>((...args: V) => any) => ([A, B]))
  & (<A, B, C, V: [A, B, C]>((...args: V) => any) => ([A, B, C]))
  & (<A, B, C, D, V: [A, B, C, D]>((...args: V) => any) => ([A, B, C, D]))
  & (<A, B, C, D, E, V: [A, B, C, D, E]>((...args: V) => any) => ([A, B, C, D, E]))

export type Arguments<T> = $Call<_Arguments, T>
