/* eslint-disable @typescript-eslint/ban-types */
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type MyExclude<T, U> = T extends U ? never : T;

type Cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<number | string | (() => void), Function>, number | string>>,
];
