import type { Equal, Expect } from '@type-challenges/utils';

type Case =
  Expect<Equal<IsFixedStringLiteralType<'ABC' | 'DEF'>, false>> | true;
