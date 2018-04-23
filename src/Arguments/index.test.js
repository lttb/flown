/* @flow */

import type { Arguments } from './'

(() => {
  type Fn1 = (?string) => void
  type Fn2 = (string, number) => void
  type Fn3 = (string, string, string) => void
  type Fn0 = (...args: []) => void

  const fn = () => undefined

  /**
   * $ExpectError
   * Cannot cast array literal to `Arguments` because number [1] is incompatible with string [2] in the first argument.
   */
  ;(([1]): Arguments<Fn1>)
  ;(([undefined]): Arguments<Fn1>)
  ;((['x']): Arguments<Fn1>)
  ;((['a', 1]): Arguments<Fn2>)

  /**
   * $ExpectError
   * Cannot cast array literal to `Arguments` because string [1] is incompatible with number [2] in the second argument.
   */
  ;((['a', 'x']): Arguments<Fn2>)
  ;((['a', 'a', 'a']): Arguments<Fn3>)

  ;(([]): Arguments<Fn0>)
  /**
   * $ExpectError
   * Cannot cast array literal to `Arguments` because rest array [1] has an arity of 1 but tuple type [2] has an arity of 0.
   */
  ;(([1]): Arguments<Fn0>)

  ;(([]): Arguments<typeof fn>)

  /**
   * $ExpectError
   * Cannot cast array literal to `Arguments` because rest array [1] has an arity of 1 but tuple type [2] has an arity of 0.
   */
  ;(([1]): Arguments<Fn0>)
})()

;(() => {
  const fn3 = (a: string, b: number, c: string): string => c

  declare var y: (...args: Arguments<typeof fn3>) => void;

  y('x', 1, 'x')
  /**
   * $ExpectError
   * Cannot call `y` because number [1] is incompatible with string [2] in the third argument.
   */
  y('x', 1, 1)
})()
