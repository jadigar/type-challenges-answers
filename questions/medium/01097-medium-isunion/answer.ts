/* eslint-disable @typescript-eslint/no-invalid-void-type */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type IsUnion<T, U = T> =
  [ T ] extends [ never ]
    ? false
    : T extends T
      ? [ U ] extends [ T ]
        ? false
        : true
      : false;

type Check1 = IsUnion<string>;
//    ^?

type Check2 = IsUnion<'a' | 'b' | 'c' | 'd'>;
//    ^?

type Cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<number | string>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<'' | null | undefined | void>, true>>,
  Expect<Equal<IsUnion<{ a: number } | { a: string }>, true>>,
  Expect<Equal<IsUnion<{ a: number | string }>, false>>,
  Expect<Equal<IsUnion<[ number | string ]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<never | string>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>,
];
