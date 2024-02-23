import type { Equal, Expect } from '@type-challenges/utils';

type Cases = [
  Expect<Equal<CartesianProduct<1 | 2, 'a' | 'b'>, [1, 'a'] | [1, 'b'] | [2, 'a'] | [2, 'b']>>,
  Expect<Equal<CartesianProduct<1 | 2 | 3, 'a' | 'b' | 'c' >, [1, 'a'] | [1, 'b'] | [1, 'c'] | [2, 'a'] | [2, 'b'] | [2, 'c'] | [3, 'a'] | [3, 'b'] | [3, 'c']>>,
  Expect<Equal<CartesianProduct<1 | 2, never | 'a'>, [1, 'a'] | [2, 'a'] >>,
  Expect<Equal<CartesianProduct<'a', Function | string>, ['a', Function] | ['a', string]>>,
];
