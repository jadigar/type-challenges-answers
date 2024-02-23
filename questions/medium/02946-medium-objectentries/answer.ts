/*
  2946 - ObjectEntries
  -------
  by jiangshan (@jiangshanmeta) #medium #object

  ### Question

  Implement the type version of ```Object.entries```

  For example

  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
  ```

  > View on GitHub: https://tsch.js.org/2946
*/

/* _____________ Your Code Here _____________ */

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type ObjectEntries<T> = { [key in keyof T]-?: [key, T[key] extends undefined ? undefined : Required<T>[key]] }[keyof T];
type ObjectEntriesGithubSolution<T extends object, K extends keyof T = keyof T> = K extends K ? [K, T[K] extends undefined ? undefined : Required<T>[K]] : never;
type Check1 = ObjectEntries<Partial<Model>>;
//      ^?
type Check2 = ObjectEntries<{ key: undefined }>;
//      ^?

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

  Expect<Equal<ObjectEntriesGithubSolution<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntriesGithubSolution<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntriesGithubSolution<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntriesGithubSolution<{ key: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntriesGithubSolution<{ key: string | undefined }>, ['key', string | undefined]>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2946/answer
  > View solutions: https://tsch.js.org/2946/solutions
  > More Challenges: https://tsch.js.org
*/
