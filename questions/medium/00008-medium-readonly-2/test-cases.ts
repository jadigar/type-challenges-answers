import type { Alike, Expect } from '@type-challenges/utils';

type Cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'description' | 'title'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'description' | 'title'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'description' >, Expected>>,
];

// @ts-expect-error
type error = MyReadonly2<Todo1, 'invalid' | 'title'>;

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}
