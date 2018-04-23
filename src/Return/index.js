/* @flow */

declare export function returnType<R>((...args: any) => R): R

export type _Return = typeof returnType

export type Return<T> = $Call<_Return, T>
