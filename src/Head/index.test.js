/* @flow */

import type { Head, _Head } from './'

/**
 * Tuples
 */
{
  (undefined: Head<[]>)
  /**
  * $ExpectError
  */
  ;(null: Head<[]>)

  ;(1: Head<[1]>)
  /**
  * $ExpectError
  */
  ;(2: Head<[1]>)


  ;(2: Head<[2, 1]>)
  /**
  * $ExpectError
  */
  ;(1: Head<[2, 1]>)


  ;(3: Head<[3, 2, 1]>)
  /**
  * $ExpectError
  */
  ;(2: Head<[3, 2, 1]>)


  ;(4: Head<[4, 3, 2, 1]>)
  /**
  * $ExpectError
  */
  ;(3: Head<[4, 3, 2, 1]>)


  ;(5: Head<[5, 4, 3, 2, 1]>)
  /**
  * $ExpectError
  */
  ;(4: Head<[5, 4, 3, 2, 1]>)

  ;(6: Head<[6, 5, 4, 3, 2, 1]>)
  /**
  * $ExpectError
  */
  ;(5: Head<[6, 5, 4, 3, 2, 1]>)
}

// Arrays
{
  (1: Head<number[]>)
  ;(2: Head<number[]>)

  ;(1: Head<$ReadOnlyArray<number>>)
  ;(2: Head<$ReadOnlyArray<number>>)
}

// Unexpected types
{
  const impl: any = a => a[0]
  const head: _Head = impl
  /**
  * $ExpectError
  */
  head(null)

  /**
  * $ExpectError
  */
  head('aa')

  /**
  * $ExpectError
  */
  head({})

  /**
  * $ExpectError
  */
  head(true)

  /**
  * $ExpectError
  */
  head(Symbol('head'))
}
