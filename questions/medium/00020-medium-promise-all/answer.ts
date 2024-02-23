/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

declare function promiseAll<T extends unknown[]>(values: readonly [ ...T ]): Promise<{
  [ K in keyof T ]: T[ K ] extends infer U | Promise<infer U>
    ? U
    : T[ K ]
}>;

declare function promiseAll2<T extends unknown[]>(values: readonly [ ...T ]): Promise<{
  [ K in keyof T ]: Awaited<T[ K ]>
}>;

const promiseAllTest1 = promiseAll([1, 2, 3] as const);
const promiseAllTest2 = promiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = promiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest4 = promiseAll<(Promise<number> | number)[]>([1, 2, 3]);
const promiseAll2Test4 = promiseAll2<(Promise<number> | number)[]>([1, 2, 3]);

type Cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[ 1, 2, 3 ]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[ 1, 2, number ]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[ number, number, number ]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>,
  Expect<Equal<typeof promiseAll2Test4, Promise<number[]>>>,
];
