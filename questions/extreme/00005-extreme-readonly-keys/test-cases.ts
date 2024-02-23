import type { Equal, Expect } from '@type-challenges/utils';

type Cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'description' | 'title', GetReadonlyKeys<Todo2>>>,
];

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}
