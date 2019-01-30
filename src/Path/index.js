/* @flow */


export type _Path = <O: Object, P>(O, P) => $Call<
  & (<A, B, C, D, E>([A, B, C, D, E]) => $ElementType<
    $ElementType<$ElementType<$ElementType<$ElementType<O, A>, B>, C>, D>
  , E>)
  & (<A, B, C, D>([A, B, C, D]) => $ElementType<
    $ElementType<$ElementType<$ElementType<O, A>, B>, C>
  , D>)
  & (<A, B, C>([A, B, C]) => $ElementType<
    $ElementType<$ElementType<O, A>, B>
  , C>)
  & (<A, B>([A, B]) => $ElementType<
    $ElementType<O, A>
  , B>)
  & (<A>([A]) => $ElementType<
    O
  , A>)
, P>

export type Path<O: Object, P> = $Call<_Path, O, P>

