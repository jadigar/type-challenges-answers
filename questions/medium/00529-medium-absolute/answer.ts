/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Absolute<T extends bigint | number | string> = `${(`${T}` extends `-${infer D}`
  ? D
  : T)}`;

type Check1 = Absolute<-0>;
//      ^?

type Check2 = Absolute<-1_000_000n>;
//      ^?

type Cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<9_999n>, '9999'>>,
];
