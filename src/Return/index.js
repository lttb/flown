/* @flow */

declare export function returnType<R>((...args: any) => R): R

export type ReturnType = typeof returnType

export type Return<T> = $Call<ReturnType, T>
