import type { Equal, Expect } from '@type-challenges/utils';

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['age', number] | ['locations', string[] | null] | ['name', string];

type Cases = [
  Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>,
];
