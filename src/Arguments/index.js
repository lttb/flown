/* @flow */

import type { Arity } from '..'

type Extract5 = <A, B, C, D, E, F: (A, B, C, D, E) => any>(F) => ([A & A, B & B, C & C, D & D, E & E])
type Extract4 = <A, B, C, D, F: (A, B, C, D) => any>(F) => ([A & A, B & B, C & C, D & D])
type Extract3 = <A, B, C, F: (A, B, C) => any>(F) => ([A & A, B & B, C & C])
type Extract2 = <A, B, F: (A, B) => any>(F) => ([A & A, B & B])
type Extract1 = <A, F: (A) => any>(F) => ([A & A])

/**
 * The trick with the intersection helps to locate errors better
 *
 * TODO: add some examples and explanation how it works
 */
type Helper<F> = (
  & ((5) => $Call<Extract5 & Extract5, F>)
  & ((4) => $Call<Extract4 & Extract4, F>)
  & ((3) => $Call<Extract3 & Extract3, F>)
  & ((2) => $Call<Extract2 & Extract2, F>)
  & ((1) => $Call<Extract1 & Extract1, F>)
  & ((0) => [])
)

export type Arguments<F> = ($Call<(Helper<F>), Arity<F>>)
