import type { Equal, Expect } from '@type-challenges/utils';

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['age', number] | ['locations', string[] | null] | ['name', string];

type Cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: string | undefined }>, ['key', string | undefined]>>,
];
