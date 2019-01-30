/* @flow */

import type { Arity } from '..'

(() => {
  const sum = (a: number, b: number): number => a + b

    declare var arity: Arity<typeof sum>

    ;(arity: 2) // ok

    /**
     * $ExpectError
     *
     * Cannot cast `arity` to number literal `3` because  number literal `2` [1] is incompatible with  number literal `3` [2]
     */
    ;(arity: 3) // error
})()

;(() => {
  const sum = (a: number, b: ?number = 0): number => a + b

  declare var arity: Arity<typeof sum>

  ;(arity: 2) // ok

  /**
   * $ExpectError
   *
   * Cannot cast `arity` to number literal `3` because  number literal `2` [1] is incompatible with  number literal `3` [2]
   */
  ;(arity: 3) // error
})()

;(() => {
  const sum = (): number => 0

    declare var arity: Arity<typeof sum>

    ;(arity: 0) // ok

    /**
     * $ExpectError
     *
     * Cannot cast `arity` to number literal `3` because  number literal `2` [1] is incompatible with  number literal `3` [2]
     */
    ;(arity: 1) // error
})()
