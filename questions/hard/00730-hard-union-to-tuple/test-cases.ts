import type { Equal, Expect } from '@type-challenges/utils';

type ExtractValuesOfTuple<T extends any[]> = T[number & keyof T];

type Cases = [
  Expect<Equal<UnionToTuple<'a' | 'b'>['length'], 2>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>, 'a' | 'b'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a'>>, 'a'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<1 | undefined | void>>, 1 | void>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<never | 'd' | 'f' | 1>>, 'd' | 'f' | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<1 | [{ a: 1 }]>>, 1 | [{ a: 1 }]>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<never>>, never>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 1 | 2>>, 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 1 | 2>>,
];
