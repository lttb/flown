/* @flow */

type F1 = <A, B>(A, B) => {|a: A, b: B|}
type F2 = <A, B>(A, B) => [A, B]
type F3 = <A>(A) => A

type T1 = $Call<F1, number, string>
type T2 = $Call<F2, number, string>
type T3 = $Call<F3, number>
{
  /**
   * ExpectError, but there is none
   */
  ({ a: '0', b: '0' }: T1)

  /**
   * ExpectError, but there is none
   */
  ;([0, 0]: T2)

  /**
   * $ExpectError
   */
  ;('0': _T3)

  declare var x1: T1
  declare var x2: T2
  declare var x3: T3

  /**
   * $ExpectError
   */
  ;(x1: { a: string, b: string })

  /**
   * $ExpectError
   */
  ;(x2: [string, string])

  /**
   * $ExpectError
   */
  ;(x3: '0')
}
