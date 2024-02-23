import type { Equal, Expect } from '@type-challenges/utils';

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<number | string>>;
type Z1 = Promise<Promise<Promise<boolean | string>>>;
interface T { then: (onfulfilled: (arg: number) => any) => any }

type Cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, number | string>>,
  Expect<Equal<MyAwaited<Z1>, boolean | string>>,
  Expect<Equal<MyAwaited<T>, number>>,
];

// @ts-expect-error
type error = MyAwaited<number>;
