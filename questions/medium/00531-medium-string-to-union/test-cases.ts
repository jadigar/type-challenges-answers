import type { Equal, Expect } from '@type-challenges/utils';

type Cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'e' | 'h' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'a' | 'c' | 'i' | 'n' | 'o' | 'r' | 's' | 'u' | 'v'>>,
];
