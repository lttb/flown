/* @flow */

declare function arguments<A>((...args: [A]) => any): [A]
declare function arguments<A, B>((...args: [A, B]) => any): [A, B]
declare function arguments<A, B, C>((...args: [A, B, C]) => any): [A, B, C]
declare function arguments<A, B, C, D>((...args: [A, B, C, D]) => any): [A, B, C, D]
declare function arguments<A, B, C, D, E>((...args: [A, B, C, D, E]) => any): [A, B, C, D, E]
declare function arguments((...args: []) => any): []

export type Arguments<T> = $Call<typeof arguments, T>

type Fn1 = (?string) => void
type Fn2 = (string, number) => void
type Fn3 = (...args: []) => void

const fn = () => undefined

let x;
((x = [1]): Arguments<Fn1>) // error
;((x = [undefined]): Arguments<Fn1>);
((x = ['x']): Arguments<Fn1>);

((x = ['a', 1]): Arguments<Fn2>);
((x = ['a', 'x']): Arguments<Fn2>) // error

;((x = []): Arguments<Fn3>);
((x = [1]): Arguments<Fn3>) // error

;((x = []): Arguments<typeof fn>);
((x = [1]): Arguments<Fn3>) // error


function funcOne(a: string, b: number, c: string): string {
  const result = ''
  // magic ...
  return result
}

type FuncOneTypeReturnsVoid = (...args: Arguments<typeof funcOne>) => void;

const y: FuncOneTypeReturnsVoid = (a, b) => undefined

y('x', 1, 'x') // ok
y('x', 1, 1) // error
