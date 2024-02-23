import type { Equal, Expect } from '@type-challenges/utils';

type Cases = [
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: undefined, b: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'b'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: number, b?: string }, 'a' | 'b'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: undefined, b: undefined }, 'a' | 'b'>, true>>,
];
