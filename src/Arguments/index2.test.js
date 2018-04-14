/* @flow */

type _Arguments = <T>((...args: T) => any) => (T & T)

export type Arguments<F> = $Call<_Arguments, F>


type Fn1 = (?string) => void
type Fn2 = (string, ?number) => void
type Fn3 = (...args: []) => void

const fn = (x: string) => undefined
const fn2 = () => undefined

type A1 = Arguments<Fn1>

let x;
((x = ['x']): A1);
((x = [1]): A1) // error

;((x = [1]): Arguments<typeof fn>); // error

((x = ['a', 1]): Arguments<Fn2>);
((x = ['a', 'x']): Arguments<Fn2>) // error

;((x = []): Arguments<Fn3>);
((x = [null]): Arguments<Fn3>) // error

;((x = []): Arguments<typeof fn2>)
