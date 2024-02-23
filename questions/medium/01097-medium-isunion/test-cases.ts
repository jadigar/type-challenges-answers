import type { Equal, Expect } from '@type-challenges/utils';

type Cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<number | string>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<'' | null | undefined | void>, true>>,
  Expect<Equal<IsUnion<{ a: number } | { a: string }>, true>>,
  Expect<Equal<IsUnion<{ a: number | string }>, false>>,
  Expect<Equal<IsUnion<[number | string]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<never | string>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<any | string>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>,
];
