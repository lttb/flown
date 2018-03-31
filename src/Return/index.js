/* @flow */

declare function returnType<R>((...args: any) => R): R

export type ReturnType<T> = $Call<typeof returnType, T>
