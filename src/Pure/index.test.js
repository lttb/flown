/* @flow */

import type { Pure } from '..'

{
  const getX = (data: {x: number}): number => data.x

  declare var _getX: Pure<typeof getX>

  declare var data: $ReadOnly<{x: 1}>

  /**
   * Check inline calling
   */
  ;(getX: Pure<*>)(data)

  /**
   * $ExpectError
   *
   * Cannot call `getX` because:
   * - Either property `x` is missing in object literal [1] but exists in object type [2] in the first argument.
   * - Or property `x` is missing in object literal [1] but exists in object type [2].
   */
  ;(getX: Pure<*>)({ y: 1 })

  /**
   * $ExpectError
   *
   * Cannot cast `_getX(...)` to string because number [1] is incompatible with string [2].
   */
  ;(_getX(data): string)

  _getX(data)
  _getX({ x: 1 })
  _getX({ x: 2 })

  /**
   * $ExpectError
   *
   * Cannot call `_getX` because:
   * - Either property `x` is missing in object literal [1] but exists in object type [2] in the first argument.
   * - Or property `x` is missing in object literal [1] but exists in object type [2].
   */
  _getX({ y: 2 })

  /**
   * $ExpectError
   *
   * Cannot call `_getX` because:
   * - Either string [1] is incompatible with number [2] in property `x` of the first argument.
   * - Or string [1] is incompatible with number [2] in property `x`.
   */
  _getX({ x: 'x' })

  /**
   * $ExpectError
   *
   * Cannot call `_getX` because:
   * - Either string [1] is incompatible with object type [2] in the first argument.
   * - Or string [1] is incompatible with object type [2].
   */
  _getX('x') // error
}

{
  const get = (a: ?string) => a

  declare var _get: Pure<typeof get>

  _get('x')
  _get('y')
  _get('z')
  _get()

  /**
   * $ExpectError
   *
   * Cannot call `_get` because:
   * - Either number [1] is incompatible with string [2] in the first argument.
   * - Or number [1] is incompatible with string [2].
   */
  _get(2)
}

{
  const get2 = (a: {x: number}, b: {y: number}): * => b

  declare var _get2: Pure<typeof get2>

  declare var data: $ReadOnly<{x: 1}>

  _get2(data, { y: 1 })
  _get2(data, { y: 1 })
  _get2({ x: 1 }, { y: 1 })

  /**
   * $ExpectError
   */
  _get2(data, { x: 1 })

  /**
   * $ExpectError
   */
  _get2({ x: 1 }, { y: 'x' })

  /**
   * $ExpectError
   */
  _get2({ x: 1 }, 'x')
}

{
  const get3 = (a: {x: number}, b: {y: number}, c: {z: string}): * => c

  declare var _get3: Pure<typeof get3>

  declare var data: $ReadOnly<{x: 1}>

  /**
   * $ExpectError
   */
  _get3(data, { y: 'x' }, { z: 'z' }) // error

  /**
   * $ExpectError
   */
  _get3(data, { y: 2 }, { z: 2 }) // error
}
